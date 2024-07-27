import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "../../css/footer.css";
import axios from "axios";
import { useContext } from "react";

export default function Headder() {
 

  return (
    <div>
      <div className="main-div ">
        <div className="div-home">
          <NavLink to="/home">
            <svg
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0L0 12H4V28H12V20H20V28H28V11.88L32 12L16 0Z"
                fill="white"
                className="icon"
              />
            </svg>
          </NavLink>
        </div>

        <div className="div-account">
          <NavLink to="/course">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0352466 0V3.52466H28.2326V0H0.0352466ZM0.0352466 7.04933V27.8801C0.0352466 28.0563 0.176233 28.1973 0.352466 28.1973H27.8801C28.0563 28.1973 28.1973 28.0563 28.1973 27.8801V7.04933H17.7291V10.6797H10.574V7.04933H0H0.0352466Z"
                fill="white"
                className="icon"
              />
            </svg>
          </NavLink>
        </div>

        <div className="div-contact">
          <NavLink to="/Contact">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.547544 0.035C0.337544 0.035 0.232544 0.175 0.232544 0.35V20.685C0.232544 20.86 0.372544 21 0.547544 21H21.2325L28.2325 28V0.315C28.2325 0.105 28.0925 0 27.9175 0H0.582544L0.547544 0.035Z"
                fill="white"
                className="icon"
              />
            </svg>
          </NavLink>
        </div>

        <div className="div-course">
          <NavLink to="/Account">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3488 0C10.4668 0 7.29068 3.95256 7.29068 8.82267C7.29068 13.6928 10.4668 17.6453 14.3488 17.6453C18.2308 17.6453 21.407 13.6928 21.407 8.82267C21.407 3.95256 18.2308 0 14.3488 0ZM6.97307 17.6453C3.23225 17.8218 0.232544 20.8921 0.232544 24.7035V28.2326H28.4651V24.7035C28.4651 20.8921 25.5007 17.8218 21.7246 17.6453C19.8189 19.7981 17.2074 21.1744 14.3488 21.1744C11.4903 21.1744 8.87876 19.7981 6.97307 17.6453Z"
                fill="white"
                className="icon"
              />
            </svg>
          </NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
