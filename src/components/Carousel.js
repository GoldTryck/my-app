import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Box } from "@mui/material";

const Carousel = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/26/04/26/dawn-8412840_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/02/07/13/45/leopard-9390105_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/03/27/08/26/leopard-694460_1280.jpg",
  ];

  return (
    <Box sx={{ width: "100%", height: "400px", overflow: "hidden" }}>
      <Swiper
        className="carousel"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`slide ${index + 1}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
