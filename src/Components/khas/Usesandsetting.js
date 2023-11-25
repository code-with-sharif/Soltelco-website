import React from 'react'


const Usesandsetting = () => {
   
  return (

<main>
    <section className='w-full mt-4 flex md:flex-row flex-col flex-wrap justify-center '>
<div className=' md:w-5/12 w-full mb-5 sm:pl-0 pl-4 '>
<h1 className='text-[#f16722] text-[32px] font   pt-6 sm:mb-[40px] mb-2 font-extrabold'>Getting Started</h1>
  <h2 className='text-[24px] text-[#673c95] font-bold mb-[20px]'>Registration</h2>
  <p className='text-[16px] text-[#000] sm:pr-5 pr-3   leading-5 text-justify '>
    You can register for your Kaashplus account for FREE at any center of Soltelco in the country.
    <br />

Step 1: Fill the registration form.

To fill the registration form you will have to provide:-
Personal details (mobile no, first name, last name)
Identification document (passport, ID)

Passport size photo

You will receive a confirmation that the registration is successful.</p>
<h3 className='text-[24px] text-[#673c95] font-bold lg:mb-[20px] mb-0 mt-5'>Activation</h3>
<p className='text-[16px] text-[#000]  leading-5  w-[70%]'>You can register for your Kaashplus
 account for FREE at any center of Soltelco in the country.
<br />
Step 1: Fill the registration form.
<br />
To fill the registration form you will have to provide:-</p>
  </div>      

  {/* ///   how to use  right side*/}
  <div className='  md:w-5/12 w-full    sm:pl-0 pl-4 '>
<h1 className='text-[#f16722] text-[32px] font  pt-6  sm:mb-[40px]  font-extrabold'>How to use</h1>
  <h2 className='text-[24px] text-[#673c95] font-bold mb-[10px]'>Sent a Customer</h2>
  <p className='text-[16px] text-[#000] lg:w-[100%] w-auto  leading-5 '>
  To Sent Dollar Dail: *660*Number*money#
<br />
To Sent Silling Dail: *770*Number*money#
<h3 className='text-[24px] text-[#673c95] font-bold mb-[10px]'>Sent a Merchant</h3>
To Sent Dollar Dail: *663*merchantID*money#
<br />
To Sent Silling Dail: *773*merchantID*money#
<h4 className='text-[24px] text-[#673c95] font-bold mb-[10px]'>Buy a Prepaid</h4>
To recharge airtime Dollar Dail: *661*number*money#
<br />
To recharge airtime Shilling Dail: *771*number*money#
<h3 className='text-[24px] text-[#673c95] font-bold mb-[10px]'>Buy Bundles</h3>
To buy bundles Dollar Dail: *665#
<br />
To buy bundles Shilling Dail: *775#
<h5 className='text-[24px] text-[#673c95] font-bold mb-[10px]'>Potals</h5>
<div>Visit here: www.mykaashplus.soltelcontwork.com</div>
</p>

  </div>  
    </section>
</main>
    )
}

export default Usesandsetting;