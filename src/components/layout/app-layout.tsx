import React from 'react';
import { Header } from './header';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[79rem] space-y-12 px-4 pb-4 md:px-6 md:pb-6 lg:space-y-16">
      <Header />
      {children}
    </div>
  );
};
