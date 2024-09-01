'use client';
import {
  DraftingCompass,
  CodeXml,
  TabletSmartphone,
  Rocket,
} from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/pagination';
import CardAvatar from '@/components/cardAvatar';
export default function Testimonials() {
  return (
    <div className="gap-4 flex flex-col">
      <div className="m-2 flex flex-col justify-center align-middle items-center lg:items-start">
        <p className="text-white text-[30px] font-[600]">Testimonials</p>
      </div>
      <div className="m-2">
        <Swiper
          className="w-[360px] lg:w-[930px] h-[140px] lg:h-[120px] slide-testimonial"
          modules={[Virtual, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            type: 'progressbar',
            el: '.swiper-pagination',
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          virtual
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
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
              className=""
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
              className=""
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
              className=""
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
              className=""
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
              className=""
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
              className=""
            />
          </SwiperSlide>
          <div className="!h-[8px] !top-auto bottom-0 rounded-full swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
        </Swiper>
      </div>
    </div>
  );
}
