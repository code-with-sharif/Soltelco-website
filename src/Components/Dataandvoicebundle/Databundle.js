import React, { useState } from 'react'
// import Buildurplan from './Buildurplan'
import Mushakal from './Mushakal'
import Footer from '../Header/Footer'
import Footer2 from '../Header/Footer2'
// import ApexChart from './Buildurplan/ApexChart'
import Buildurplan from './Buildurplan'
import Soltelcomints from './Soltelcomints'
import Telesomminsms from './Telesomminsms'

const Databundle = () => {
  const [value, setValue] = useState(30);
  const [percent, setPercent] = useState(15);
  const [data, setData] = useState(30);
  const [datapercent, setdatapercent] = useState(15);
  const [teledata, setteledata] = useState(30);
  const [telepercent, settelepercent] = useState(15);
  console.log(value, percent)
  const total= value+ data+ teledata;
  return (
    <>
    <div>
    <h1 className='text-center text-[#404040] text-xl font-bold leading-3 font  mt-32' >Build your own plan</h1>
    <p className='text-center py-4 text-[#888] text-[20px]'>Create a plan you’ll love so much, you’ll want to hug it</p>
   <div className='flex justify-center items-center lg:flex-row flex-col md:flex-col'>



   <Buildurplan value={value} setValue={setValue} percent={percent} setPercent={setPercent} />
   <Soltelcomints data={data} setData={setData} datapercent={datapercent} setdatapercent={setdatapercent} />
   <Telesomminsms value={teledata} setValue={setteledata} percent={telepercent} setPercent={settelepercent} />
  
   </div>

   {/* result */}
   <div className='w-4/12 h-2/12 mx-auto mb-20 shadow-md border-2 py-3 text-center'>
   <h1>Pay monthly</h1>
   <p>{total}</p>
<h2>change your plan any time</h2>
   </div>
   </div>
    {/* <ApexChart /> */}
   <Mushakal />

   <Mushakal />
   <Mushakal />
   <Footer />
      <Footer2 />
    
    </>
  )
}

export default Databundle