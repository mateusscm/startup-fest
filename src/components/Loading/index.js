import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 100,
      }}
    >
      <RingLoader size={60} color={"#000"} />
    </div>
  );
};
export default Loading;
