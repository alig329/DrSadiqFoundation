import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// Animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-80px); }
  100% { opacity: 1; transform: translateY(50); }
`;

const diagonalEntry = keyframes`
  0% { transform: translate(-150%, -150%); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1; }
`;

const SuccessStories = () => {
  const [activeVideo, setActiveVideo] = useState(2); // Default to second video
  const [animationComplete, setAnimationComplete] = useState(false);

  const videoThumbnails = [
    { id: 1, url: "https://www.youtube.com/embed/xVrNzq3JurY?rel=0", thumbnail: "https://img.youtube.com/vi/xVrNzq3JurY/hqdefault.jpg" },
    { id: 2, url: "https://www.youtube.com/embed/UZq2VasXVDk?rel=0", thumbnail: "https://img.youtube.com/vi/UZq2VasXVDk/hqdefault.jpg" },
    { id: 3, url: "https://www.youtube.com/embed/BDuJM8Yr4uo?rel=0", thumbnail: "https://img.youtube.com/vi/BDuJM8Yr4uo/hqdefault.jpg" },
    { id: 4, url: "https://www.youtube.com/embed/cmIfYSh_gUk?rel=0", thumbnail: "https://img.youtube.com/vi/cmIfYSh_gUk/hqdefault.jpg" },
    { id: 5, url: "https://www.youtube.com/embed/JY4Mp8o7BVo?rel=0", thumbnail: "https://img.youtube.com/vi/JY4Mp8o7BVo/hqdefault.jpg" },
    { id: 6, url: "https://www.youtube.com/embed/U8QfLZGEZ1k?rel=0", thumbnail: "https://img.youtube.com/vi/U8QfLZGEZ1k/hqdefault.jpg" },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleThumbnailClick = (id) => setActiveVideo(id);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: "20px", md: "34px" },
          fontWeight: "bold",
          marginBottom: { xs: "10px", md: "20px" },
          color: "rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          animation: `${fadeIn} 2s ease-in-out`,
        }}
      >
        <Typography variant="h2">Success Stories</Typography>
      </Box>

      {/* Video Carousel */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", height: "300px", overflow: "hidden" }}>
        {videoThumbnails.map((video, index) => {
          const isActive = activeVideo === video.id;
          const offset = index - (activeVideo - 1);

          const videoStyle = {
            width: isActive ? "450px" : "180px",
            height: isActive ? "250px" : "120px",
            position: "absolute",
            left: `calc(50% + ${offset * 200}px - ${isActive ? "200px" : "75px"})`,
            transform: isActive ? "translateY(0)" : animationComplete ? "translateY(50px)" : "translate(-150%, -150%)",
            zIndex: isActive ? "50" : "5",
            opacity: animationComplete ? (isActive ? "1" : "0.7") : "0",
            boxShadow: isActive ? "0px 10px 30px rgba(0, 128, 255, 0.6)" : "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.5s ease-in-out",
            animation: animationComplete ? "none" : `${diagonalEntry} 2s ease-in-out`,
          };

          return (
            <div key={video.id} style={videoStyle} onClick={() => handleThumbnailClick(video.id)}>
              {isActive ? (
                <iframe width="100%" height="100%" src={video.url} title={`Video ${video.id}`} frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              ) : (
                <img src={video.thumbnail} alt={`Thumbnail for Video ${video.id}`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div style={{ marginTop: { xs: "10px", md: "20px" }, display: "flex", justifyContent: "center", gap: { xs: "8px", md: "10px" } }}>
        {videoThumbnails.map((video) => (
          <button key={video.id} onClick={() => handleThumbnailClick(video.id)}
            style={{
              background: activeVideo === video.id ? "#0080ff" : "#f0f0f0",
              color: activeVideo === video.id ? "#fff" : "#000",
              border: "none",
              padding: activeVideo === video.id ? "8px 16px" : "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.3s ease",
            }}>
            {`Video ${video.id}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
