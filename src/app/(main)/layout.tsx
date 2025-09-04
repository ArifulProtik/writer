import React from 'react';
import MainHeader from '@/components/main/main-header';

function LayOut({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

export default LayOut;
