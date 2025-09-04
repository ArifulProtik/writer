import { Github, Mail } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '../ui/separator';
import AuthBtn from './auth-btn';

type Props = {
  label: string;
  size?: 'sm' | 'md' | 'lg';

};

function AuthModalBtn({ label }: Props) {
  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button>{label}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className="text-center font-serif"
            autoFocus
          >
            Get Started
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col mx-auto justify-center gap-4 w-4/5 mt-4">

          <AuthBtn
            label="Signin With Github"
            icon={<Github />}
            provider="github"
          />
          <Separator />
          <AuthBtn
            label="Sign in With Email"
            icon={<Mail />}
            provider="email"
          />

          <p className="text-center text-xs text-muted-foreground px-3.5 py-2 border-t mt-4">
            By 'sign in', you agree to our Terms of Service and Privacy Policy.
          </p>

        </div>
      </DialogContent>

    </Dialog>
  );
}

export default AuthModalBtn;
