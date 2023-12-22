import { useState } from "react";
import "./Signup.scss";
import Login from "../../Assets/Images/register.jpg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Authentication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [alreadyUser, setAlreadyUser] = useState(false);

  const authenticateUser = async (event) => {
    event.preventDefault();

    try {
      if (alreadyUser) {
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          mode: "cors",
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const { token } = await response.json();

          localStorage.setItem("token", token);
          navigate("/userpage");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Credentials",
          });
          console.error("Login Failed");
        }
      } else {
        const registrationResponse = await fetch(
          "http://localhost:3000/api/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (registrationResponse.ok) {
          const login = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            mode: "cors",
            body: JSON.stringify(formData),
          });

          if (login.ok) {
            const { token } = await login.json();
            localStorage.setItem("token", token);
            console.log(token);
            navigate("/userpage", { state: { isNewUser: true, token } });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Invalid Credentials",
            });
            console.error("Login Failed");
          }
        }
      }
    } catch (error) {
      console.error("API Error: " + error);
    }
  };

  const handleAdmin = async (event) => {
    event.preventDefault();
    const loginadmin = await fetch("http://localhost:3000/loginAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(formData),
    });

    if (loginadmin.ok) {
      const adminJson = await loginadmin.json();
      //redirect
      localStorage.setItem("token", adminJson.token);
      navigate("/adminpage");
    } else {
      alert("Invalid credentials");
    }
  };

  const toggleForm = () => {
    setAlreadyUser(!alreadyUser);
  };

  const buttonWidth = alreadyUser ? "11.3vw" : "24vw";

  return (
    <>
      <div className="auth-main">
        <div className="main-1">
          <img src={Login} alt="Login" />
        </div>
        <div className="main-2">
          <form onSubmit={authenticateUser}>
            <h1>{alreadyUser ? "Welcome Back" : "Join FitWay"}</h1>
            <input
              type="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            {!alreadyUser && (
              <input
                type="text"
                placeholder="Username*"
                required
                value={formData.username}
                onChange={(event) =>
                  setFormData({ ...formData, username: event.target.value })
                }
              />
            )}
            <input
              type="password"
              placeholder="Password*"
              required
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
            <div className="auth-button">
              <button type="submit" style={{ width: buttonWidth }}>
                {alreadyUser ? "User Login" : "Join FitWay"}
              </button>
              {<p>{alreadyUser ? "Or" : ""}</p>}
              {alreadyUser && (
                <button onClick={handleAdmin} style={{ width: buttonWidth }}>
                  Admin Login
                </button>
              )}
            </div>
            <p>
              {alreadyUser
                ? "Not a member of FitWay? "
                : "Already a member of FitWay? "}
              <a href="#" onClick={toggleForm}>
                {alreadyUser ? "Sign Up" : "Login"}
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authentication;
