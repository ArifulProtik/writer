'use client';
import Link from 'next/link';
import React from 'react';
import { authClient } from '@/lib/auth-client';
import AuthModalBtn from '../shared/auth-modal-btn';
import { Skeleton } from '../ui/skeleton';
import MainAuthenticatedMenu from './main-authinticated-menu';

function MainHeader() {
  const { data: session, isPending } = authClient.useSession();
  return (
    <div className="border-b h-16">
      <div className="flex max-w-6xl mx-auto justify-between items-center h-full px-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold font-serif">Writer</h1>
        </Link>

        {/* -- right side */}
        {isPending && (
          <LoadingSkeleton />
        )}

        {!isPending && session && (
          <div className="flex">
            <MainAuthenticatedMenu user={session.user} />
          </div>
        )}
        {!isPending && !session && (
          <AuthModalBtn label="Get Started" />
        )}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <Skeleton className="h-16" />
  );
}

export default MainHeader;
