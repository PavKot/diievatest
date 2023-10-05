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
    <>
      <div
        className="video-preloader"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 9999,
          background: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: videoLoaded ? "none" : "block",
        }}
      >
        <video
          id="preload-video"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
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
      <div
        className="video-preloader-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 9998,
          background: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: videoLoaded ? "none" : "block",
        }}
      ></div>
    </>
  );
}

export default VideoPreloader;
