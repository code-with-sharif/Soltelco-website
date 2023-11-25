import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { IoMdRemove } from 'react-icons/io';
import khasseting from '../khas/KhaasSetting.json';

const KhasSetting = () => {
  return (
    <main className='my-5  w-10/12  md:pl-20 pl-4'>
      <h1 className='text-[32px] font font-extrabold text-[#f16722] lg:mb-8 mb-5'>Settings</h1>
      {khasseting.map((item, index) => (
        <SettingItem key={index} item={item} />
      ))}
    </main>
  );
};

const SettingItem = ({ item }) => {
  const [data, setData] = useState(false);

  const handleclick = () => {
    setData(!data);
  }

  return (
    <div className="grid items-center  lg:w-[40%] w-auto pr-1 relative" onClick={handleclick}>
      <div className='flex justify-start items-baseline items-center '>
        <h1 className='text-[#673c95] text-[20px] font bg-white pt-1 pb-1 cursor-pointer'>{item.heading}</h1>
        {data ? <IoMdRemove className='ml-6  bg-[#f16722] rounded-full top-2 cursor-pointer' /> 
          : <MdAdd className='ml-6 bg-[#f16722] rounded-full cursor-pointer' />}
      </div>
      <div
        className={`transition-all overflow-hidden duration-300 ${data ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className='text-[16px] mb-1 text-[#000] bg-white'>{item.paragraph}</p>
      </div>
    </div>
  );
};

export default KhasSetting;
