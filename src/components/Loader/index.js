import React from "react";
import { CircularProgress } from "@mui/material";
// import LinearProgress from "@mui/material/LinearProgress";
// import Box from "@mui/material/Box";
import "./styles.css";

const Loader = () => {
  // const [progress, setProgress] = React.useState(0);
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 0 : prevProgress + 10
  //     );
  //   }, 800);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className="loader-container">
      <CircularProgress />
    </div>
  );
};

export default Loader;
