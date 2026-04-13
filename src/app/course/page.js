"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image'

export default function page() {
  return (
    <>
      <div className='ves_main_wr'>
        <div className='container'>
          <div className='course_wrap'>
            <div className='course_wr'>
              <div className='corse_left'>
                <h2>Course</h2>
              </div>
              <div className='corse_right'>
                <a href='#'>Add Course</a>
              </div>
            </div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='corse_grid'>
                  <div className='corse_item'>
                    <div className='corse_item_wr'>
                      <Image
                        src="/assets/image/course05.png"
                        width={450}
                        height={300}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='corse_item_main'>
                      <h3>MERN Stack Training Course</h3>
                      <div className='corse_inqiry'>
                        <div className='corse_01'>
                          <p>Duration</p>
                          <p>Teacher</p>
                          <p>Students</p>
                        </div>
                        <div className='corse_01'>
                          <p>10 Months</p>
                          <p>Rohit Mali</p>
                          <p>150</p>
                        </div>
                      </div>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                  <div className='corse_item'>
                    <div className='corse_item_wr'>
                      <Image
                        src="/assets/image/course06.png"
                        width={450}
                        height={300}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='corse_item_main'>
                      <h3>Bootstrap Beginners Course</h3>
                      <div className='corse_inqiry'>
                        <div className='corse_01'>
                          <p>Duration</p>
                          <p>Teacher</p>
                          <p>Students</p>
                        </div>
                        <div className='corse_01'>
                          <p>10 Months</p>
                          <p>Rohit Mali</p>
                          <p>150</p>
                        </div>
                      </div>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                  <div className='corse_item'>
                    <div className='corse_item_wr'>
                      <Image
                        src="/assets/image/course04.png"
                        width={450}
                        height={300}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='corse_item_main'>
                      <h3>PHP Training Course</h3>
                      <div className='corse_inqiry'>
                        <div className='corse_01'>
                          <p>Duration</p>
                          <p>Teacher</p>
                          <p>Students</p>
                        </div>
                        <div className='corse_01'>
                          <p>10 Months</p>
                          <p>Rohit Mali</p>
                          <p>150</p>
                        </div>
                      </div>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                  <div className='corse_item'>
                    <div className='corse_item_wr'>
                      <Image
                        src="/assets/image/course02.png"
                        width={450}
                        height={300}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='corse_item_main'>
                      <h3>Graphics Design</h3>
                      <div className='corse_inqiry'>
                        <div className='corse_01'>
                          <p>Duration</p>
                          <p>Teacher</p>
                          <p>Students</p>
                        </div>
                        <div className='corse_01'>
                          <p>10 Months</p>
                          <p>Rohit Mali</p>
                          <p>150</p>
                        </div>
                      </div>

                      <a href='#'>Read More</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='corse_grid'>
                  <div className='corse_item'>
                    <div className='corse_item_wr'>
                      <Image
                        src="/assets/image/course01.png"
                        width={450}
                        height={300}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='corse_item_main'>
                      <h3>Degital Marketing</h3>
                      <div className='corse_inqiry'>
                        <div className='corse_01'>
                          <p>Duration</p>
                          <p>Teacher</p>
                          <p>Students</p>
                        </div>
                        <div className='corse_01'>
                          <p>10 Months</p>
                          <p>Rohit Mali</p>
                          <p>150</p>
                        </div>
                      </div>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                  <div className='corse_item'>
                    <div className='corse_item_wr'>
                      <Image
                        src="/assets/image/course03.png"
                        width={450}
                        height={300}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='corse_item_main'>
                      <h3>Python Training Course</h3>
                      <div className='corse_inqiry'>
                        <div className='corse_01'>
                          <p>Duration</p>
                          <p>Teacher</p>
                          <p>Students</p>
                        </div>
                        <div className='corse_01'>
                          <p>10 Months</p>
                          <p>Rohit Mali</p>
                          <p>150</p>
                        </div>
                      </div>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                  <div className='corse_item'>
                    <div className='corse_item_wr'>
                      <Image
                        src="/assets/image/course07.png"
                        width={450}
                        height={300}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='corse_item_main'>
                      <h3>Web Designing Course</h3>
                      <div className='corse_inqiry'>
                        <div className='corse_01'>
                          <p>Duration</p>
                          <p>Teacher</p>
                          <p>Students</p>
                        </div>
                        <div className='corse_01'>
                          <p>10 Months</p>
                          <p>Rohit Mali</p>
                          <p>150</p>
                        </div>
                      </div>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                  <div className='corse_item'>
                    <div className='corse_item_wr'>
                      <Image
                        src="/assets/image/course08.png"
                        width={450}
                        height={300}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='corse_item_main'>
                      <h3>Shopify Training Course</h3>
                      <div className='corse_inqiry'>
                        <div className='corse_01'>
                          <p>Duration</p>
                          <p>Teacher</p>
                          <p>Students</p>
                        </div>
                        <div className='corse_01'>
                          <p>10 Months</p>
                          <p>Rohit Mali</p>
                          <p>150</p>
                        </div>
                      </div>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div >
    </>
  )
}


