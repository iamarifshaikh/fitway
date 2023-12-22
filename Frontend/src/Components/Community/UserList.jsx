import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import AdminModal from "../Admin/Modal"

const UserList = () => {
  const [openUser, setOpenUser] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    mtitle: "",
    title: "",
    description: "",
  });
  const handleModalShow = (mtitle, title, description) => {
    setModalData({ mtitle, title, description });
    setModalShow(true);
  };

  const handleUserClick = (userId) => {
    setOpenUser((prevOpenUser) => (prevOpenUser === userId ? null : userId));
  };

  return (
    <div>
      <h6>Users</h6>
      <br />
      <ListGroup>
        {[1863, 2, 1420, 4500, 3456].map((userId) => (
          <div key={userId}>
            <ListGroup.Item
              onClick={() => handleUserClick(userId)}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw"
                style={{ width: "30px", borderRadius: "50%" }}
                className="mx-2"
              />
              User {userId}
            </ListGroup.Item>
            <Collapse in={openUser === userId}>
              <div id={`user-collapse-${userId}`}>
                <div className="row mx-5">
                  <Card style={{ width: "95rem" }}>
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
                    <AdminModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      {...modalData}
                    />
                  </Card>
                </div>
              </div>
            </Collapse>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
