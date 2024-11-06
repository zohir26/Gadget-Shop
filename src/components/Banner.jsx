
import banner from '../assets/banner.jpg'
const Banner = ({title,subtitle,cartBtn, wishBtn, img}) => {
    return (
        <div >
            <div data-theme="aqua" className="hero bg-base-200 p-10 text-white ">
                <div className="hero-content text-center  ">
                    <div className="">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">
                            {subtitle}
                        </p>
                       <div className='flex gap-5 justify-center items-center'>
                       <button className="btn rounded-xl text-white ml-20">{cartBtn}</button>
                       <button className="btn rounded-xl  text-white">{wishBtn}</button>
                       </div>
                    </div>
                </div>
            </div>
              {/* banner img floating */}
        <div data-theme="" className='w-full  h-66   rounded-xl relative'>
        <img src={img} alt="" className='w-[1024px] h-full rounded-xl mx-auto'/>
        </div>
        </div>
   

       
    );
};

export default Banner;