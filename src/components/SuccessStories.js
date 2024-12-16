import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const VideoCarousel = () => {
    const [activeVideo, setActiveVideo] = useState(null); 

    const videoThumbnails = [
        {
            id: 1,
            url: "https://www.youtube.com/embed/xVrNzq3JurY?si=h8rQ93j9vC5XUGRe", 
            thumbnail: "https://via.placeholder.com/300x200",
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/UZq2VasXVDk?si=mZkRmR25J5KxoB_r", 
            thumbnail: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            url: "https://www.youtube.com/embed/BDuJM8Yr4uo?si=OuAb97Y7kqGkwos0", 
            thumbnail: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            url: "https://www.youtube.com/embed/cmIfYSh_gUk?si=lDmqkDY4_DBTzu4D", 
            thumbnail: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            url: "https://www.youtube.com/embed/JY4Mp8o7BVo?si=q4x6LU2pKtN6uMnO", 
            thumbnail: "https://via.placeholder.com/300x200",
        },
    ];

    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px", 
        responsive: [
            {
                breakpoint: 1024, // Medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 768, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "15px",
                },
            },
        ],
    };
    

    return (
        <Box sx={{ width: "80%", margin: "auto", padding: "20px" }}>
            <Typography variant="h2" sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: { xs: '20px', sm: '30px', md: '40px' },
                fontWeight: 'bold',
                lineHeight: '50px',
                marginTop: '10px',
                color: '#000000',
            }}>
                SUCCESS STORIES
            </Typography>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: {
                    xs: '14px',
                    sm: '16px',
                    md: '18px'
                },
                fontWeight: '500',
                lineHeight: {
                    xs: '30px',
                    md: '44px'
                },
                color: '#000000',
                textAlign: 'center',
                padding: '10px'
            }}>
                At Dr. Sadiq Foundation, we are passionate about sharing our knowledge, expertise, and experiences with others. Here are our project insights, stories, and lessons learned, to engage with our community.
            </Typography>
            <Slider {...settings}>
                {videoThumbnails.map((video) => (
                    <Box
                        key={video.id}
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "400px",
                            overflow: "hidden",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            textAlign: "center",
                        }}
                    >
                        {activeVideo === video.id ? (
                            // Display the video if it's active
                            <iframe
                                src={video.url}
                                title={`Video ${video.id}`}
                                start="5"
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            ></iframe>
                        ) : (
                            // Display the thumbnail with a play button
                            <>
                                <img
                                    src={video.thumbnail}
                                    alt={`Thumbnail for video ${video.id}`}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        color: "white",
                                    }}
                                    onClick={() => setActiveVideo(video.id)} // Set the active video
                                >
                                    <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
                                </IconButton>
                            </>
                        )}
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default VideoCarousel;
