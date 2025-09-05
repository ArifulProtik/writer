import React from 'react';
import { authClient } from '@/lib/auth-client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { CircleArrowOutDownLeft, Settings, SquarePen, User2 } from 'lucide-react';
import { User } from 'better-auth';

type Props = {
  user: User;
};

export default function MainAuthenticatedMenu({ user }: Props) {
  const handleSingout = () => {
    authClient.signOut();
  };
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={user.image!} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User2 />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SquarePen />
            Write
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive hover:text-destructive!"
            onClick={handleSingout}
          >
            <CircleArrowOutDownLeft />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
