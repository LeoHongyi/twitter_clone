import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import SidebarTweetButton from './SidebarTweetButton.tsx';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const items = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill,
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: BsBellFill,
      auth: true,
    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: FaUser,
      auth: true,
    },
  ];
  console.log('currentUser', currentUser);
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              auth={item.auth}
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
          {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
