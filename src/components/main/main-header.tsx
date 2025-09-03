import Link from 'next/link';
import React from 'react';
import AuthModalBtn from '../shared/auth-modal-btn';

function MainHeader() {
  return (
    <div className="border-b h-16">
      <div className="flex max-w-6xl mx-auto justify-between items-center h-full px-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold font-serif">Writer</h1>
        </Link>

        {/* -- right side */}
        <AuthModalBtn label="Login" />
      </div>
    </div>
  );
}

export default MainHeader;
