import Doings from '@/sections/about-me/doings';
// import Testimonials from '@/sections/about-me/testimonials';
import HeaderH from '@/sections/header';
import Projects from '@/sections/about-me/projects';
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('@/sections/about-me/testimonials'), {
  ssr: false,
  loading: ()=> <div className='h-[230px] w-full'></div>,
});

export default function Home() {
  return (
    <div className="w-full lg:grid lg:grid-cols-3 gap-8 mt-4 mb-14 lg:mb-0">
      {/* Body */}
      <HeaderH />
      <div className="w-full lg:col-span-2 bg-[#1E1E1E] gap-8 px-4 py-8 flex flex-col justify-start align-middle items-center lg:items-start rounded-md">
        <div>
          <div className="m-2 flex flex-col justify-center align-middle items-center lg:items-start">
            <p className="text-white text-[30px] font-[600]">About Me</p>
            <hr className="block w-1/3 rounded-md my-4 border-[4px] border-[#E9CD98]" />
          </div>
          <div className="m-2 gap-2 flex flex-col">
            <p>
              I am Project Manager and Software Engineer from Hanoi, Vietnam,
              working in web and mobile development. I enjoy solving problems
              and integrating new technologies in life.
            </p>
            <p>
              My job is to build your website or your mobile app so that it is
              functional and user-triendly but at the same time attractive.
              Moreover, I add personal touch to your product and make sure that
              is eye-catching and easy to use. My aim is to bring across your
              message and identity in the most creative way.
            </p>
          </div>
        </div>
        <Doings />
        <Testimonials />
        <Projects />
      </div>
      {/* End Body */}
    </div>
  );
}
