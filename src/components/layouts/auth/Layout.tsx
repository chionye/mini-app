/** @format */

import logo from "../../../assets/vite.svg";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen flex flex-col justify-between item-center bg-gray-100 p-10'>
      <div className=''>
        <div>
          <img src={logo} alt='' />
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>{children}</div>
      <div className='flex justify-between items-center w-full'>
        <div className=''>
          <p>All rights reserved</p>
        </div>
        <div>
          <p>Built with love by me</p>
        </div>
      </div>
    </div>
  );
};
