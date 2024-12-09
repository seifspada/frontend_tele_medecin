import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import afi from "./assets/logo/Afi.jpg";
import instagram from "./assets/logo/instagram.png";
import linkdin from "./assets/logo/linkdin.png";
import twitter from "./assets/logo/twitter.png";
import "./DoctorProfileForm.css";



export default function DoctorProfileForm() {
  return (
    <div className="container">
      <div className="card">
        <img className="iamge_profile" src={afi} alt="Doctor Profile" />
        <p className="card__name">Lily-Grace Colley</p>
        
        <ul className="social-icons">
          <li>
            <a href="#!">
            <img src={instagram} alt="icon_linkdin" style={{ width: '40px', height: '40px' }}/>
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#!">
            <img src={twitter} alt="icon_linkdin"  style={{ width: '40px', height: '40px' }}/>
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={linkdin} alt="icon_linkdin"  style={{ width: '40px', height: '40px' }}/>
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
         
        </ul>
        <div className="button-group">
          <button className="btn draw-border">Follow</button>
          <button className="btn draw-border">Rendez-vous</button>
        </div>
      </div>
    </div>
  );
}
