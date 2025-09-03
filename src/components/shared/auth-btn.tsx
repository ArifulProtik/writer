import { Github } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

type Props = {
  label: string;
  icon?: React.ReactNode;
};

export default function AuthBtn({ label }: Props) {
  return (
    <Button
      variant="outline"
      size="lg"
      className="cursor-pointer"
    >
      <Github />
      {label}
    </Button>
  );
}
