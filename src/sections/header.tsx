import Image from 'next/image';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';
export default function HeaderH() {
  return (
    <>
      
      {/* Header */}
      <div className="bg-[#1E1E1E] p-10 flex flex-col justify-center align-middle items-center rounded-md">
        <div className="m-2 flex flex-col justify-center align-middle items-center gap-4">
          <Image
            src="/avatar.jpg"
            alt="Portfolio avatar"
            className="rounded-lg object-cover w-[104px] h-[104px]"
            width={264}
            height={264}
            priority
          />
          <p className="text-white text-[20px]">Nguyễn Quang Hiếu</p>
          <div className="bg-[#2C2C2C] p-2 rounded-md text-white text-[14px] font-[600]">
            Software Engineer
          </div>
        </div>
        <hr className="block w-full rounded-md my-4 border-[1px] border-[#2C2C2C]" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <div className="flex items-center p-3 bg-[#2C2C2C] rounded-md">
              <Mail color="#ADA26E" size={18} />
            </div>
            <div>
              <p className="text-[#595959] text-[14px]">EMAIL</p>
              <p className="text-white text-[16px]">hieu.nq701@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex items-center p-3 bg-[#2C2C2C] rounded-md">
              <Phone color="#ADA26E" size={18} />
            </div>
            <div>
              <p className="text-[#595959] text-[14px]">PHONE</p>
              <p className="text-white text-[16px]">0962716996</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex items-center p-3 bg-[#2C2C2C] rounded-md">
              <Calendar color="#ADA26E" size={18} />
            </div>
            <div>
              <p className="text-[#595959] text-[14px]">DOB</p>
              <p className="text-white text-[16px]">Jan 07, 2000</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex items-center p-3 bg-[#2C2C2C] rounded-md">
              <MapPin color="#ADA26E" size={18} />
            </div>
            <div>
              <p className="text-[#595959] text-[14px]">Location</p>
              <p className="text-white text-[16px]">Hanoi, Vietnam</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Header */}
    </>
  );
}
