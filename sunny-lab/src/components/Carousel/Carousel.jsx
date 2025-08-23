import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        centeredSlides={true} // 👈 centra la imagen activa
        loop={true}           // 👈 vuelve a empezar al llegar al final
        navigation            // 👈 flechas
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src="/estudio1.JPG" alt="Estudio SunnyLab" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/estudio2.JPG" alt="Producción musical" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/estudio3.JPG" alt="Artista en SunnyLab" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
