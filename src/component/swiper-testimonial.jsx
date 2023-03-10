import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const SwiperTestimonial = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><div className="border gap-4 bg-white shadow-md rounded-2xl h-[500px]">Hi</div></SwiperSlide>
            <SwiperSlide><div className="border gap-4 bg-white shadow-md rounded-2xl h-[500px]">Hi</div></SwiperSlide>
            <SwiperSlide><div className="border gap-4 bg-white shadow-md rounded-2xl h-[500px]">Hi</div></SwiperSlide>
            <SwiperSlide><div className="border gap-4 bg-white shadow-md rounded-2xl h-[500px]">Hi</div></SwiperSlide>
            ...
        </Swiper>
    );
};

export default SwiperTestimonial;