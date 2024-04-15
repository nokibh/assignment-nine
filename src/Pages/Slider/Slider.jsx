// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="images/home5.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/home6.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/home7.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/home8.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
