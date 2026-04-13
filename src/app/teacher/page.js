import React from 'react'
import Image from 'next/image'
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

export default function page() {
  return (
    <>
      <div className='ves_main_wr'>
        <div className='container'>
          <div className='teacher_main'>
            <div className='teacher_wr'>
              <h2>Teacher Details :</h2>
            </div>
            <div className='teacher_grid'>
              <div className='teacher_left_section'>
                <div className='teacher_01_top'>
                </div>
                <div className='teacher_01_bottom'>
                  <div className='teacher_img'>
                    <Image
                      src="/assets/image/teacher01.jpeg"
                      alt="teacher"
                      width={180}
                      height={180}
                    />
                  </div>
                  <div className='teacher_details'>
                    <h3>Rohit Mali</h3>
                    <p>Director</p>
                  </div>
                </div>
                <div className='contact_info'>
                  <h3>Contact</h3>

                  <div className='teacher_contact_anchar'>
                    <a href='#'><IoCallOutline />8889993179</a>
                    <a href='#'><TfiEmail />vatsalyaexpertsolutions@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className='teacher_right_section'>
                <div className='teacher_right'>
                  <div className='details'>
                    <h3>Profile Details</h3>
                  </div>
                  <div className='profile_details_wr'>
                    <div className='profile_det'>
                      <h4>Father's Name</h4>
                      <p>Devidas Mali</p>
                    </div>
                    <div className='profile_det'>
                      <h4>Mother's Name</h4>
                      <p>Kalpana Mali</p>
                    </div>
                    <div className='profile_det'>
                      <h4>DOB</h4>
                      <p>13/07/1997</p>
                    </div>
                    <div className='profile_det'>
                      <h4>Martial Status</h4>
                      <p>Married</p>
                    </div>
                    <div className='profile_det'>
                      <h4>Oualification</h4>
                      <p>BSC CSS</p>
                    </div>
                    <div className='profile_det'>
                      <h4>Experience</h4>
                      <p>10 Years</p>
                    </div>
                  </div>
                </div>
                <div className='teachers_inform'>
                  <div className='information'>
                    <div className='detalis_infor'>
                      <h3>Experience</h3>
                      <p>8 Years Work from IT Geeeks, Dewas(M.P)</p>
                    </div>
                  </div>
                  <div className='information'>
                    <div className='detalis_infor'>
                      <h3>Address</h3>
                      <p>75 Vatsalya Bhawan, Bhosle Colony, Nr. Saraswati School, Dewas(M.P)</p>
                    </div>
                  </div>
                </div>
                <div className='social_media'>
                  <h3>Social Media</h3>
                  <div className='social_links_wr'>
                    <div className='social_link'>
                      <p>Facebook</p>
                      <a href='#'>www.vatsalyaexpertsolutions.com</a>
                    </div>
                    <div className='social_link'>
                      <p>Intragram</p>
                      <a href='#'>www.vatsalyaexpertsolutions.com</a>
                    </div>
                    <div className='social_link'>
                      <p>Twitter</p>
                      <a href='#'>www.vatsalyaexpertsolutions.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


