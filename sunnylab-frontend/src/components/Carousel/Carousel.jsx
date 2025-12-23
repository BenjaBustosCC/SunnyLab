import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2.5} // 👈 muestra la central + costados
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${import.meta.env.BASE_URL}estudio1.JPG`} alt="Estudio SunnyLab" />
            <div className="carousel-text">
              <h2>Composición</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${import.meta.env.BASE_URL}estudio2.JPG`} alt="Producción musical" />
            <div className="carousel-text">
              <h2>Producción Musical</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${import.meta.env.BASE_URL}estudio3.JPG`} alt="Clases" />
            <div className="carousel-text">
              <h2>Musica para artes visuales</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${import.meta.env.BASE_URL}estudio3.JPG`} alt="Clases" />
            <div className="carousel-text">
              <h2>Academia</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={`${import.meta.env.BASE_URL}estudio3.JPG`} alt="Clases" />
            <div className="carousel-text">
              <h2>Podcast</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
