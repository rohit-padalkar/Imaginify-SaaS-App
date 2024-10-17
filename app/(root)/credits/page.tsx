import Image from "next/image";

const Credits = () => {
  return (
    <div>
      credit page
      <Image
        src="/goku.jpg"
        alt="goku image"
        width={50}
        height={50}
        unoptimized
      />
    </div>
  );
};

export default Credits;
