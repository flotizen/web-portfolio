import {
  DraftingCompass,
  CodeXml,
  TabletSmartphone,
  Rocket,
} from 'lucide-react';
export default function Doings() {
  return (
    <div className="gap-4 flex flex-col">
      <div className="m-2 flex flex-col justify-center align-middle items-center lg:items-start">
        <p className="text-white text-[30px] font-[600]">What I'm doing</p>
      </div>
      <div className="m-2 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className="flex flex-row gap-4 bg-[#2C2C2C] p-4 rounded-xl">
          <div className="flex justify-center items-baseline">
            <CodeXml size={60} color="#ADA26E" />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] font-[600]">Web development</p>
            <p className="text-[14px]">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 bg-[#2C2C2C] p-4 rounded-xl">
          <div className="flex justify-center items-baseline">
            <TabletSmartphone size={60} color="#ADA26E" />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] font-[600]">Mobile development</p>
            <p className="text-[14px]">
              Professional development of applications for iOS and Android.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 bg-[#2C2C2C] p-4 rounded-xl">
          <div className="flex justify-center items-baseline">
            <Rocket size={60} color="#ADA26E" />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] font-[600]">DevOps</p>
            <p className="text-[14px]">
              Professional development of continuous integration and continuous
              delivery.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 bg-[#2C2C2C] p-4 rounded-xl">
          <div className="flex justify-center items-baseline">
            <DraftingCompass size={60} color="#ADA26E" />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] font-[600]">Web design</p>
            <p className="text-[14px]">
              The most modern and high-quality design made at an advance level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
