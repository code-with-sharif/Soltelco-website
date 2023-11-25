import { data } from '../khas/kassmultiimg';
import img7 from '../../Images/kassimg7.png'
import img8 from '../../Images/kaasimg8.png'
const Khasbenefit = () => {
  return (
    <>    <main className=' lg:mt-12  mt-6 '>
      <h1 className='text-[#f16722] text-[32px] font font-semibold text-center'>Benefits</h1>
      <div className='lg:w-9/12 w-full mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2'>
        {data.map((item, index) => (
          <div className=' w-full' key={index}>
            <div className=''>
              <img className='w-3/12 h-3/12 mx-auto' src={item.img} alt="" />
            </div>
            <div>
            <p className='block mt-1 text-center '>
              <span className='   text-center text-[16px] text-[#000000] font'>{index + 1}.</span>
              <span className=' text-center text-[16px] text-[#000000] font '>{item.text}</span>
            </p></div>
          </div>
        ))}
      </div>
          </main>
          {/* other img  */}

         <div className='my-[36px] sm:px-[230px] px-[10px] '>

         <div className=' space-x-8  sm:flex block  my-8'>
            <div><img className='w-[100px] h-[100px]' src={img7} alt="" /></div>
            <div>
            <h1 className='text-[32px] text-[#f16722] font-semibold mb-20px font'>Adeega Madhxiye</h1>
            <p className='font text-[16px] text-[#000] mb-1'>MADHXIYE (Saving account) waa adeeg kamida KAASHPlus oo kuu 
              suuro gelinaya in aad ku kaydsan karto lacagtaada muddo gaaban iyo mid dheerba.</p>
            </div>
          </div>
          {/* second 2 */}
          <div className='space-x-8  sm:flex block'>
            <div><img className='w-[100px] h-[100px]' src={img8} alt="" /></div>
            <div>
            <h1 className='text-[32px] text-[#f16722] font-semibold mb-20px font'>
Adeega Hagbad</h1>
            <p className='font text-[16px] text-[#000] mb-1'>MADHXIYE (Saving account) waa adeeg kamida KAASHPlus oo kuu 
              suuro gelinaya in aad ku kaydsan karto lacagtaada muddo gaaban iyo mid dheerba.</p>
            </div>
          </div>
         </div>
          </>

  );
}

export default Khasbenefit;
