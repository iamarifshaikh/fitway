import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import MyModal from "./Modal";

const UserComponent = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = React.useState({
    mtitle: "",
    title: "",
    description: "",
  });

  // const formatCreatedAt = (timestamp) => {
  //   console.log("Timestamp:", timestamp);
  //   if (!timestamp) {
  //     return ""; // Handle the case where timestamp is not available
  //   }

  //   const date = new Date(timestamp);

  //   if (isNaN(date.getTime())) {
  //     return "Invalid Date"; // Handle the case where the timestamp is not a valid date
  //   }

  //   const options = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //     second: "numeric",
  //     timeZoneName: "short",
  //   };

  //   return date.toLocaleDateString("en-US", options);
  // };

  const formatCreatedAt = (timestamp) => {
    if (!timestamp) {
      return "";
    }

    const currentDate = new Date();
    const joinDate = new Date(timestamp);

    if (isNaN(joinDate.getTime())) {
      return "Invalid Date";
    }

    const monthsDiff =
      (currentDate.getFullYear() - joinDate.getFullYear()) * 12 +
      (currentDate.getMonth() - joinDate.getMonth());

    if (monthsDiff == 0) {
      return `joined this month`;
    }
    return `${monthsDiff} months ago`;
  };

  const handleModalShow = (mtitle, title, description) => {
    setModalData({ mtitle, title, description });
    setModalShow(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:3000/api/fitness-data", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          mode: "cors",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setUserData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="column">
          <div className="col-md-6">
            <Card style={{ width: "18rem" }} className="px-2">
              <Card.Img
                variant="top"
                style={{ width: "10rem" }}
                className="container my-4 py-3"
                src="https://cdn-icons-png.flaticon.com/512/6833/6833573.png"
              />
              <Card.Body>
                <Card.Title>{userData && userData[0].user}</Card.Title>
                <Card.Text>
                  <div className="d-flex py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-bar-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                    <span className="mx-2" style={{ marginTop: "-0.2rem" }}>
                      {userData && userData[0].height}
                    </span>
                  </div>
                  <div className="d-flex py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                    >
                      <path d="M310.3 97.25c-8-3.5-17.5 .25-21 8.5L255.8 184C233.8 184.3 216 202 216 224c0 22.12 17.88 40 40 40S296 246.1 296 224c0-10.5-4.25-20-11-27.12l33.75-78.63C322.3 110.1 318.4 100.8 310.3 97.25zM448 64h-56.23C359.5 24.91 310.7 0 256 0S152.5 24.91 120.2 64H64C28.75 64 0 92.75 0 128v320c0 35.25 28.75 64 64 64h384c35.25 0 64-28.75 64-64V128C512 92.75 483.3 64 448 64zM256 304c-70.58 0-128-57.42-128-128s57.42-128 128-128c70.58 0 128 57.42 128 128S326.6 304 256 304z" />
                    </svg>{" "}
                    <path
                      fillRule="evenodd"
                      d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                    />
                    <span className="mx-2" style={{ marginTop: "-0.2rem" }}>
                      {userData && userData[0].weight}
                    </span>
                  </div>
                  <div className="d-flex py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-activity"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                      />
                    </svg>
                    <span className="mx-2" style={{ marginTop: "-0.2rem" }}>
                      {/* 20.1 */}
                      {userData && userData[0].BMI}
                    </span>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  Hyderabad
                </Card.Title>
                <div className="d-flex py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>
                  <span className="mx-2" style={{ marginTop: "-0.2rem" }}>
                    {userData &&
                      formatCreatedAt(userData[0].timestamps.createdAt)}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mx-5">
          <Card style={{ width: "45rem" }}>
            <Card.Title>Diet Plan</Card.Title>
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Diet Plan",
                    "Sunday",
                    "Breakfast [8:00-8:30AM]	chapati-4 + Egg roast 1/2 cup 2 egg Mid-Meal 11:00-11:30AM	green gram sprouts 1 cupLunch 2:00-2:30PM	4 Roti +1/2 cup salad + Fish curry 180 gm fish + 1/2 cup cabbage subji.Evening 4:00-4:30PM	1 Portion fruit+ cottage cheese Dinner 8:00-8:30PM	3 Roti/Chapati + Tomato subji 1/2 cup."
                  )
                }
              >
                Sunday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Diet Plan",
                    "Monday",
                    "Breakfast (8:00-8:30AM)	Sprouts & Paneer Paratha 3 + Green chutney. Mid-Meal (11:00-11:30AM)	1 cup boilled black channa. Lunch (2:00-2:30PM)	1.5 cup rice + chicken curry (150 gm chicken) + Palak subji 1/2 cup + 1/2 cup low fat curd. Evening (4:00-4:30PM)	1 Portion fruit salad + Yoghurt Dinner (8:00-8:30PM)	Brocken wheat upma 1 cup + 1/2 cup green beans subji"
                  )
                }
              >
                Monday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Diet Plan",
                    "Tuesday",
                    "Breakfast (8:00-8:30AM)	Chicken sandwich (4 slice bread) + 1 cup skimmed milk.Mid-Meal (11:00-11:30AM)	1 Portion fruit salad + Cottage cheese. Lunch (2:00-2:30PM)	Veg pulav rice 1.5 cup + 1 cup Soya Chunk curry + 1/2 cup Low fat curd. Evening (4:00-4:30PM)	1 cup light tea + Chicken salad 1 cup. Dinner (8:00-8:30PM)	3 roti/ Chapathi + Lady finger subji 1/2 cup."
                  )
                }
              >
                Tuesday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Diet Plan",
                    "Wednesday",
                    "Breakfast (8:00-8:30AM)	Soya flour Uttapam 2 +Tomato /green chutney + 1 glass skimmed milk. Mid-Meal (11:00-11:30AM)	1 Portion fruit salad + Cottage cheese. Lunch (2:00-2:30PM)	1.5 cup rice+Kidney beans curry 1 cup + 1/2 cup cucumber salad + Lady finger subji 1/2 cup. Evening (4:00-4:30PM)	1 Cup light tea + Brown rice flakes poha with nuts 1 cup. Dinner (8:00-8:30PM)	Wheat dosa 3 + 1 cup Bitter guard subji."
                  )
                }
              >
                Wednesday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Diet Plan",
                    "Thursday",
                    "Breakfast (8:00-8:30AM)	Mushroom Paratha 2 + Tomato chutney + Scrambled egg (2 eggs) Mid-Meal (11:00-11:30AM)	plane Yoghurt with raw vegetables / grilled vegetables - 1 cup Lunch (2:00-2:30PM)	1/2 cup rice + 3 medium chapati + Fish masala 1 cup (fish 180 g) + Snake guard subji 1/2 cup. Evening (4:00-4:30PM)	1 cup boilled channa+ light tea 1 cup. Dinner (8:00-8:30PM)	3 Roti/ chapati + 1/2 cup mix veg curry"
                  )
                }
              >
                Thursday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Diet Plan",
                    "Friday",
                    "Breakfast (8:00-8:30AM)	4 Idli + Sambar 1/2 cup + 1 table spoon Green chutney/ Tomato Chutney + 2 egg white Mid-Meal (11:00-11:30AM)	1 cup banana + almond milk shake. Lunch (2:00-2:30PM)	1 cup rice + Soya chunk curry 1/2 cup + Lady finger subji 1/2 cup + small cup low fat curd. Evening (4:00-4:30PM)	1 cup tea + Home made protein bar. Dinner (8:00-8:30PM)	3 Roti / chapati + Ridge guard subji 1/2 cup."
                  )
                }
              >
                Friday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Diet Plan",
                    "Saturday",
                    "Breakfast (8:00-8:30AM)	Chicken Keema Paratha 2 + 1 tbs green chutney + 1 glass skim milk. Mid-Meal (11:00-11:30AM)	1 cup boilled channa Lunch (2:00-2:30PM)	4 chapati + Grilled chicken 150 gm + Dhal 1/2 cup + cucumber salad 1/2 cup. Evening (4:00-4:30PM)	1 cup blue berry milk shake Dinner (8:00-8:30PM)	Brocken wheat upma 1 cup + 1/2 cup green beans subji"
                  )
                }
              >
                Saturday
              </Button>
            </ButtonGroup>
            <br />
            <Card.Title>Workout Plan</Card.Title>
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Workout Plan",
                    "Sunday",
                    "Day 1: Push Barbell bench press (3 sets of 8-12 reps) Barbell military press (3 sets of 8-12 reps) Dumbbell incline press (3 sets of 8-12 reps) Dumbbell lateral raises (3 sets of 8-12 reps) Dumbbell tricep extensions (3 sets of 8-12 reps)"
                  )
                }
              >
                Sunday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Workout Plan",
                    "Monday",
                    "Day 2: Pull Barbell deadlifts (3 sets of 8-12 reps) Barbell bent over rows (3 sets of 8-12 reps) Lat pulldowns (3 sets of 8-12 reps) Dumbbell upright rows (3 sets of 8-12 reps) Dumbbell single arm bicep curls (3 sets of 8-12 reps)"
                  )
                }
              >
                Monday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Workout Plan",
                    "Tuesday",
                    "Day 3: Legs Barbell squats (3 sets of 8-12 reps) Bulgarian split squat (3 sets of 8-12 reps) Leg press (3 sets of 8-12 reps) Leg extensions (3 sets of 8-12 reps) Standing calf raises (3 sets of 8-12 reps)"
                  )
                }
              >
                Tuesday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Workout Plan",
                    "Wednesday",
                    "Day 4: Push Push ups (3 sets of 8-12 reps) Barbell incline bench press (3 sets of 8-12 reps) Dumbbell shoulder press (3 sets of 8-12 reps) Tricep pushdowns (3 sets of 8-12 reps)"
                  )
                }
              >
                Wednesday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Workout Plan",
                    "Thursday",
                    "Day 5: Pull Pull ups (3 sets of 8-12 reps) Seated cable row (3 sets of 8-12 reps) Face pulls (3 sets of 8-12 reps) Barbell bicep curl (3 sets of 8-12 reps) Barbell good mornings (3 sets of 8-12 reps)"
                  )
                }
              >
                Thursday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow(
                    "Workout Plan",
                    "Friday",
                    "Day 6: Legs Goblet squats (3 sets of 8-12 reps) Lunges (3 sets of 8-12 reps) Hip thrust (3 sets of 8-12 reps) Romanian deadlifts (3 sets of 8-12 reps) Glute kickbacks (3 sets of 8-12 reps)"
                  )
                }
              >
                Friday
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  handleModalShow("Workout Plan", "Saturday", "Rest")
                }
              >
                Saturday
              </Button>
            </ButtonGroup>
            <MyModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              {...modalData}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
