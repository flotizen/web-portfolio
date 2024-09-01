import Image from 'next/image';
import CardBase from './ui/cardBase';

type CardAvatarProps = {
  avatar: {
    url: string;
    width: number;
    height: number;
    className?: string;
  };
  title: string;
  content: string;
  className?: string;
};
type AvatarProps = {
  avatar: string;
  width: number;
  height: number;
  className?: string;
};
export const AvatarSpace = ({
  avatar,
  width,
  height,
  className,
}: AvatarProps) => {
  return (
    <>
      <div className={`${className}`}>
        <Image src={avatar} alt="avatar-space" width={width} height={height} />
      </div>
    </>
  );
};
export default function CardAvatar({
  avatar,
  title,
  content,
  className,
}: CardAvatarProps) {
  return (
    <>
      <CardBase
        title={title}
        content={content}
        className={className}
        cardIcon={
          <AvatarSpace
            avatar={avatar.url}
            width={avatar.width}
            height={avatar.height}
            className={avatar.className}
          />
        }
      />
    </>
  );
}
