import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <div className="flex-info">
      {/* first div for heading comp */}
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>

        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>

        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>

        {/* this div for btn */}
        <motion.div
          className="btn-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link to="/dashboard">
            <Button text={"Dashboard"} onClick={() => console.log("Namste")} />
          </Link>
          <Button
            text={"Share App"}
            outlined={true}
            onClick={() => console.log("Hello Namste")}
          />
        </motion.div>
      </div>

      {/* second div for phone photo */}
      <div className="phone-container">
        <motion.img
          src={iphone}
          className="iphone"
          drag
          dragConstraints={{
            top: -50,
            left: -80,
            right: 10,
            bottom: 20,
          }}
          initial={{ y: -30 }}
          animate={{ y: 60 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
};

export default MainComponent;
