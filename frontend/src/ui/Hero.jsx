
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
        <div>
        <div className='grid grid-cols-2 '>
            <div className='relative border border-gray-300'>
               <div className=' bg-[#fbf8f1] border border-gray-300 shadow-lg shadow-transparent w-4/5 absolute top-1/2 left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 '>
                <div className=' text-center  border-2 border-black m-2'>
                <div className='py-24 px-12 flex flex-col gap-6 items-center border m-1 border-black'>

                    <span className='uppercase font-medium'>EID 2024</span>
                    <h2 className='text-6xl'>Salwar Kameez</h2>
                    <p className='mb-2'>Explore our latest Eid Collection. Shop for Pakistani suits,Anarkali Suits,Palazzo Suits and more.</p>
                    <Button type='primary' className='text-3xl' onClick={onClickHandler}>Shop Now</Button>                
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