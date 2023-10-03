import React, { useEffect, useState } from "react";
import preloader from "../Assets/preloader.mp4";

function VideoPreloader() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("preload-video");

    if (videoElement) {
      videoElement.addEventListener("loadeddata", () => {
        // Delay hiding the preloader for a few seconds (adjust as needed)
        setTimeout(() => {
          setVideoLoaded(true);
        }, 5000); // 3000 milliseconds (6 seconds) delay
      });
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        background: "#000",
        display: videoLoaded ? "none" : "block",
      }}
    >
      <video
        id="preload-video"
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <source src={preloader} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPreloader;
