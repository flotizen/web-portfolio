type CardHProps = {
  cardIcon?: JSX.Element;
  title: string;
  content: string;
  className?:string
};
export default function CardBase({ cardIcon, title, content, className }: CardHProps) {
  return (
    <>
      <div className={`flex flex-row gap-4 bg-[#2C2C2C] p-4 rounded-xl ${className}`}>
        {cardIcon}
        <div className="flex flex-col">
          <p className="text-[16px] font-[600]">{title}</p>
          <p className="text-[14px]">{content}</p>
        </div>
      </div>
    </>
  );
}
