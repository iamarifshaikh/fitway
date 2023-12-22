import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import UserList from "../Community/UserList";
import Button from "react-bootstrap/Button";

const Admin = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const adminAuthToken = localStorage.getItem("token");
  console.log(adminAuthToken);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/logoutAdmin");
      navigate("/");
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  // const handleLogout = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:3000/api/logoutAdmin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error: ", error);
  //   }
  // };

  // const handleGetUserData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log("Admin Token:", adminAuthToken);

  //     const response = await axios.get("http://localhost:3000/getAllUsers", {
  //       headers: {
  //         Authorization: `Bearer ${adminAuthToken}`,
  //       },
  //       withCredentials: true,
  //     });

  //     if (response.status === 200) {
  //       const data = response.data;
  //       setUserData(data);
  //       console.log(data);
  //     } else {
  //       console.error(
  //         "Error fetching user data:",
  //         response.status,
  //         response.statusText
  //       );
  //       console.error("Error details:", response.data);
  //     }
  //   } catch (err) {
  //     console.error("Error: ", err);
  //   }
  // };

  const handleGetUserData = async (e) => {
    e.preventDefault();
    try {
      console.log("Admin Token:", adminAuthToken);

      // const response = await fetch("http://localhost:3000/getAllUsers", {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${adminAuthToken}`,
      //   },
      //   credentials: "include",
      //   mode: "cors",
      // });

      const response = await fetch("http://localhost:3000/getAllUsers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        mode: "cors",
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } else {
        console.error(
          "Error fetching user data:",
          response.status,
          response.statusText
        );
        const errorData = await response.json();
        console.error("Error details:", errorData);
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <div className="fitness-admin">
      <div className="fitness-navbar">
        <nav
          className="fit-navbar"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="navbar-left">
            <h3 style={{ marginLeft: "14rem" }}>FitWay</h3>
          </div>
          <div className="navbar-right">
            <div className="navbar-button">
              <button
                className="nav-auth-button"
                onClick={handleLogout}
                style={{ marginRight: "14rem" }}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
      <br />
      <div className="container">
        <h3>Admin's Panel</h3>
        <Button onClick={handleGetUserData}>Get Data</Button>
        {userData && (
          <div>
            <h2>User Data:</h2>
            <ListGroup>
              {userData.map((user) => (
                <ListGroup.Item key={user._id}>
                  <p>User ID: {user._id}</p>
                  <p>Username: {user.username}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
