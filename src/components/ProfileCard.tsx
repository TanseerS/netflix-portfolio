import { useRef } from 'react';

type Props = {
  name: string;
  image: string;
  onClick: (rect: DOMRect) => void;
  disabled?: boolean;
};

const ProfileCard = ({ name, image, onClick, disabled }: Props) => {
  const avatarRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!avatarRef.current || disabled) return;
    onClick(avatarRef.current.getBoundingClientRect());
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className="group flex flex-col items-center cursor-pointer bg-transparent border-0 p-0 focus:outline-none disabled:cursor-default"
    >
      <div
        ref={avatarRef}
        className="
          relative
          size-[clamp(96px,14vw,200px)]
          overflow-hidden
          rounded-md
          border-[3px] border-transparent
          group-hover:border-neutral-200
          group-focus-visible:border-neutral-200
          transition-colors duration-200
        "
      >
        <img
          src={image}
          alt={`${name} profile`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3
        className="
          mt-3 text-center capitalize
          text-neutral-400 group-hover:text-neutral-200
          group-focus-visible:text-neutral-200
          text-[clamp(14px,1.2vw,20px)]
          font-normal
          transition-colors duration-200
        "
      >
        {name}
      </h3>
    </button>
  );
};

export default ProfileCard;
