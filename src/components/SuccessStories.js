import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
  const videoRefs = useRef([]);

  const videoThumbnails = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/xVrNzq3JurY?rel=0",
      thumbnail: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/UZq2VasXVDk?rel=0",
      thumbnail: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/BDuJM8Yr4uo?rel=0",
      thumbnail: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/cmIfYSh_gUk?rel=0",
      thumbnail: "https://via.placeholder.com/300x200",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
    beforeChange: () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    },
  };

  return (
    <div style={{ padding: '0 10%', marginBottom: '50px' }}>
      <Slider {...settings}>
        {videoThumbnails.map((video, index) => (
          <div key={video.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              ref={(el) => (videoRefs.current[index] = el)}
              width="80%"
              height="400px"
              src={video.url}
              title={`Video ${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-dots {
          margin-top: 20px;
          bottom:-50px; 
        }
      `}</style>
    </div>
  );
};

export default SuccessStories;