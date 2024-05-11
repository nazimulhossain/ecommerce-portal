
import Button from './Button';


import bg2 from '../assets/images/mackenzie-blue-floral.webp';


const heroStyle2 = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'600px',
}

function Hero(){

    return(
        <div>
        <div className='grid grid-cols-2 '>
            <div className='relative'>
               <div className=' bg-[#fbf8f1] border border-gray-300 shadow-lg shadow-transparent w-4/5 absolute top-1/2 left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 '>
                <div className=' text-center  border-2 border-black m-2'>
                <div className='py-24 px-12 flex flex-col gap-6 items-center border m-1 border-black'>

                    <span className='uppercase font-medium'>Spring 2024</span>
                    <h2 className='text-6xl'>Rhapsody</h2>
                    <p className='mb-2'>In Blue. Explore our latest Spring print featuring vibrant bouquets designed onto luxe silk silhouettes.</p>
                    <Button type='primary' className='text-3xl'>Shop Now</Button>                
              </div>
              </div>
              </div>
                
                </div>

           
            <div style={heroStyle2}>

            </div>
           
        </div>
          
      
      </div>
    )

}

export default Hero;