import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./swipper.css";
import { useGetAllCategoryQuery } from '../../app/slice/CategorySlice';

const Swipper = () => {
    const { data,isLoading } = useGetAllCategoryQuery();

   if (isLoading)  return (<div className='loading'></div>);

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
              slidesPerView={8}
              breakpoints={{
                    0: { slidesPerView: 3 },
                    768: { slidesPerView: 6 }, 
                    1024: { slidesPerView: 8 } 
                }}
              navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}   
              className="categoryList"          
          >
           {data?.data?.data.map((item) => (
               <SwiperSlide className="categoryCard" key={item?.id}>
                                <div className="">
                                    <img src={item?.image} alt={item?.name} className="categoryImg" />
                                </div>
                                    <h5 className='swipperName'>{ item?.name}</h5>
                            </SwiperSlide>
           ))}
           </Swiper>          
           <div className="swipperPagenation">
              <button className="buttonPage prev-btn" disabled={false}><img src="/mingcute_up-line.png" alt=">" /></button>
              <button className="buttonPage secButton next-btn" disabled={false}><img src="/mingcute_up-line (1).png" alt=">" /></button>              
          </div>
    </div>
  );
};
export default Swipper;