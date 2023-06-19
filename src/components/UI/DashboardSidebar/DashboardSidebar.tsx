'use client'

import {FC, useState} from 'react';
import Image from 'next/image';
import {Icons} from '@/components';
import {useAuth} from "@/context";
import {Sidebar} from "flowbite-react";
import {useSidebar} from "@/hooks";

type DashboardSidebarProps = {
  activePage: string
}
export const DashboardSidebar: FC<DashboardSidebarProps> = ({ activePage }) => {
  const { logout, user } = useAuth();

  const menu = useSidebar()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuStyles = isMenuOpen ? 'w-full' : 'w-0 -ml-12';

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 absolute z-20 right-8 top-12"
        onClick={() => setIsMenuOpen(isOpen => !isOpen)}
      >
        <Icons.menu/>
      </button>
      <Sidebar className={`bg-white md:min-h-screen py-8 px-2 duration-300 shadow-xl fixed z-10  md:block md:w-72 md:relative md:opacity-1 md:ml-0 ${mobileMenuStyles}`}>
        <div className="h-full">
          <div className="flex flex-col justify-between h-screen pb-20">
            <div>
              <div className="flex gap-x-4 w-fit items-center cursor-pointer">
                <Icons.logo className="w-9 min-w-[36px] h-9" />
                <Icons.textLogo className={`w-28 h-9`} />
              </div>
              <ul className="pt-6">
                {menu.map((item, index) => {
                  const Icon = item.icon
                  const isActive = item.title.toLowerCase().includes(activePage);

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        closeMenu()
                        item.action && item.action()
                      }}
                      className={`flex rounded-md w-full text-primary/40 text-sm items-center gap-x-4 p-3 mt-3 hover:bg-primary-main hover:text-white transition-colors duration-200 ${isActive && 'bg-primary-main'}`}
                    >
                      <Icon className={`min-w-[24px] w-[24px] ${isActive && 'text-white'}`} />
                      <span className={`origin-left duration-200 whitespace-nowrap ${isActive && 'text-white'}`}>
                      {item.title}
                    </span>
                    </button>
                  )
                })}
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2 duration-200">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={'https://i.pravatar.cc/300'}
                      alt="user img"
                      className="w-full h-full" fill />
                  </div>
                  <div>
                    <p className="mb-1 text-primary font-semibold text-sm">
                      {`${user?.firstName || ''} ${user?.lastName || ''}`}
                    </p>
                    <p className="text-xs text-secondary-dark">{user?.email}</p>
                  </div>
                </div>
                <div>
                  <button onClick={() => logout()} className="p-3 rounded-full hover:bg-light transition-colors duration-200">
                    <Icons.logout className="w-6 h-6 fill-white" />
                  </button>
                </div>
              </div>

              <div className="border mt-4 border-light flex gap-x-1 p-1 rounded-[32px]">
                <button className="py-2 rounded-[32px] flex justify-center items-center w-1/2 gap-x-2 cursor-pointer bg-light text-primary-main duration-200">
                  <Icons.sun className="w-4 min-w-[20px] h-4 min-h-[20px]" />
                  <span className="font-medium">Light</span>
                </button>

                <button className="py-2 rounded-[32px] flex justify-center items-center w-1/2 gap-x-2' cursor-pointer">
                  <Icons.moon className="w-4 min-w-[16px] h-4 min-h-[16px] text-text mr-2" />
                  <span className="font-medium text-text">Dark</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

