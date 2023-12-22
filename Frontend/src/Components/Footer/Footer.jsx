import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => (
  <div style={{ padding: "1.5rem", backgroundColor: "#C0C0C0", color: "black" }}>
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <div>
              <h3 className="text">FitWay</h3>
              <p>Anytime anywhere fitness tracker</p>
              
          </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <ul className="list-unstyled">
              <li>
                <Link to="/workouts">Workouts and Programs</Link>
              </li>
              <li>
                <Link to="/nutrition-plans">Nutrition Plans</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to=""></Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <ul className="list-unstyled">
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
              <li>
                <Link to="">Enquiries</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-1">FitWay Inc. © </div>
    </footer>
  </div>
);

export default Footer;