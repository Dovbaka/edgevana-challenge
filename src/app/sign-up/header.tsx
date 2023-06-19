'use client'
import Image from 'next/image'
import {Logo} from '@/helpers/images'

const Header = () => (
  <div className="grid absolute top-0 left-10 bg-transparent">
    <div className="p-4">
      <div className="h-10 relative">
        <Image src={Logo} alt="logo" width={150} height={40} />
      </div>
    </div>
  </div>
);

export default Header
