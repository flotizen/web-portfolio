'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/pagination';
import CardAvatar from '@/components/cardAvatar';
export default function Testimonials() {
  return (
    <div className="gap-4 flex flex-col w-full">
      <div className="px-2 flex flex-col justify-center align-middle items-center lg:items-start">
        <p className="text-white text-[30px] font-[600]">Clients</p>
      </div>
      <div className="px-2 w-full self-center">
        <Swiper
          className="slide-testimonial  w-full"
          modules={[Virtual, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            type: 'progressbar',
            el: '.swiper-pagination',
          }}
          loop
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          virtual
          autoplay={{
            delay: 1200,
          }}
        >
          <SwiperSlide>
            <CardAvatar
              title="VTC Game"
              avatar={{
                url: '/partner/vtcgame.webp',
                width: 160,
                height: 80,
                className: ' self-center p-2',
              }}
              content="Hieu was hired to create Game Revenue, Game Events and Game Landing Websites."
              className=" h-[140px] items-center w-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAvatar
              title="Avaso Software"
              avatar={{
                url: '/partner/avaso.png',
                width: 66,
                height: 66,
                className: 'bg-white self-center p-2',
              }}
              content="Hieu was hired to create a Work management applications for remote working."
              className=" h-[140px] items-center w-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAvatar
              title="Sentence Flow"
              avatar={{
                url: '/partner/sf.png',
                width: 75,
                height: 75,
                className: 'bg-white rounded-full self-center p-2',
              }}
              content="Hieu was hired to implement a full software development lifecycle focusing on
children's education."
              className=" h-[140px] items-center w-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAvatar
              title="Tico Group"
              avatar={{
                url: '/partner/tico.png',
                width: 55,
                height: 55,
                className: 'self-center p-2',
              }}
              content="Hieu was hired to create a Mobile application for shipping and transportation."
              className=" h-[140px] items-center w-auto"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <CardAvatar
              title="Pippip"
              avatar={{
                url: '/partner/pippip.png',
                width: 55,
                height: 55,
                className: ' self-center p-2',
              }}
              content="Hieu was hired to create a Car booking application."
              className=" h-[140px] items-center w-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAvatar
              title="Pipcar"
              avatar={{
                url: '/partner/pipcar.svg',
                width: 55,
                height: 55,
                className: 'bg-white rounded-full self-center p-2',
              }}
              content="Hieu was hired to create an ERP application for Car business."
              className=" h-[140px] items-center w-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAvatar
              title="Pipgo"
              avatar={{
                url: '/partner/pipgo.png',
                width: 55,
                height: 55,
                className: 'self-center p-2',
              }}
              content="Hieu was hired to create a CRM application for booking travel."
              className=" h-[140px] items-center w-auto"
            />
          </SwiperSlide>

          <div className="!h-[8px] !top-auto bottom-0 rounded-full swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
        </Swiper>
      </div>
    </div>
  );
}
