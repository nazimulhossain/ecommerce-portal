
import Button from './Button';


import hero from '../assets/images/hero-banner.jpg';
import { useNavigate } from 'react-router-dom';


const heroStyle2 = {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0% 25%', 
    height:'600px',
}

function Hero(){

    const navigate = useNavigate();

    const onClickHandler = ()=> {
        navigate('/new-arrivals');
    }

    return(
        <div className='mb-40 lg:mb-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
      
        
            <div className='relative border border-gray-300 order-1 lg:order-none'>
               <div className=' bg-[#fbf8f1] border border-gray-300 shadow-lg shadow-transparent w-4/5 absolute top-1/2 left-1/2 right-1/2 translate-y-[7%] -translate-x-1/2 lg:-translate-y-1/2 '>
                <div className=' text-center  border-2 border-black m-2'>
                <div className='py-6 lg:py-24 px-12 flex flex-col gap-2 lg:gap-6 items-center border m-1 border-black'>

                    <span className='uppercase font-semibold'>EID 2024</span>
                    <h2 className='text-3xl mb-4 lg:text-6xl lg:mb-0'>Salwar Kameez</h2>
                    <p className='mb-4'>Explore our latest Eid Collection. </p>
                    <Button type='primary' onClick={onClickHandler}>Shop Now</Button>                
              </div>
              </div>
              </div>
                
                </div>
                <div style={heroStyle2}></div>
            

            
           
        </div>
          
      
      </div>
    )

}

export default Hero;