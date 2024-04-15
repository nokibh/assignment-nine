// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
const Slider = () => {
  return (
    <div className="container mx-auto mt-14 mb-5">
      {/* <div className="absolute -mr-9">
        <h3 className="text-bold">Our property</h3>
      </div> */}
      <Swiper
        className="h-3/4"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <div className="">
          <SwiperSlide>
            <img
              src="images/home5.jpg"
              alt=""
              className="w-full h-64 rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/home6.jpg"
              alt=""
              className="w-full h-64 rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/home7.jpg"
              alt=""
              className="w-full h-64 rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/home8.jpg"
              alt=""
              className="w-full h-64 rounded-lg"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
