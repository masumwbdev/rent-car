import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './HostsReview.css'

const HostsReview = () => {
    return (
        <div className="host-container">
            <div className='width-control'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                        <SwiperSlide><div className="text-center">
                            <div className='host-review-card'>
                                <h4>Hello world</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti, ratione praesentium dolore animi labore aperiam fuga saepe?
                                </p>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <div className='host-review-card'>
                                    <h4>Hello world</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti, ratione praesentium dolore animi labore aperiam fuga saepe?
                                    </p>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <div className='host-review-card'>
                                    <h4>Hello world</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti, ratione praesentium dolore animi labore aperiam fuga saepe?
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <div className='host-review-card'>
                                    <h4>Hello world</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti, ratione praesentium dolore animi labore aperiam fuga saepe?
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <div className='host-review-card'>
                                    <h4>Hello world</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti, ratione praesentium dolore animi labore aperiam fuga saepe?
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HostsReview;