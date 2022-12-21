import React from "react";
import { Link } from "react-router-dom";



const linkStyle = {
  textDecoration: "none",
  color: "black",
};


// Default export
export default function Landing() {    
  return (
    <>
      <div className="landing">
        <div className="landingimg">
          <img
            width={400}
            src="https://w0.peakpx.com/wallpaper/99/825/HD-wallpaper-believe-in-yourself-lion-king.jpg"   // It will give these image by default
            alt=""
          />
        </div>
        <div className="enter">
          <h1> Welcome To My Insta-Clone </h1>
          <h2>10X Team</h2>
          <button>
            {" "}
            <Link to="/main" style={linkStyle}>  
              Enter
            </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
