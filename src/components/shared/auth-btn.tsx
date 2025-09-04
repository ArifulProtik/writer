'use client';
import { Loader2Icon } from 'lucide-react';
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Button } from '../ui/button';

type Props = {
  label: string;
  icon: React.ReactNode;
  provider: 'github' | 'email' | undefined;

};

export default function AuthBtn({ label, icon, provider }: Props) {
  const [loading, setLoading] = useState(false);
  const handSignIn = async () => {
    setLoading(true);
    try {
      await authClient.signIn.social({
        provider,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="cursor-pointer"
      disabled={loading || provider === 'email'}
      onClick={handSignIn}
    >
      { loading && (<Loader2Icon className="animate-spin" />) }
      {icon}
      {label}
    </Button>
  );
}
