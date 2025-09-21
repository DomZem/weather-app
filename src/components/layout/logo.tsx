import Image from 'next/image';

export const Logo = () => {
  return (
    <Image src="/logo.svg" alt="Weather App Logo" width={140} height={28} />
  );
};
