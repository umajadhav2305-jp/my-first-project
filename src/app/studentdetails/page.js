import React from 'react'
import Image from 'next/image';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdEmail } from "react-icons/md";
export default function Page() {
    return (
        <div className='ves_main_wr'>
            <div className='container'>
                <div className='ves_student_page'>
                    <div className='student_details_wr'>
                        <div className='student_details_first'>
                            <div className='student_top'>

                            </div>
                            <div className='student_bottom'>
                                <div className='student_img'>
                                    <Image
                                        src="/assets/image/student1.jpg"
                                        alt="My Image"
                                        width={180}
                                        height={180}
                                    />
                                </div>
                                <div className='student_info'>

                                    <div className='student_button'>

                                        <a href='#'>Active</a>
                                    </div>
                                    <div className='student_information'>
                                        <h2>Monika Pardeshi</h2>
                                    </div>
                                    <div className='anchar_call'>
                                        <p>Student ID : VES-13</p>
                                        {/* <p>VES-13</p> */}
                                        {/* <a href='#'>VES-13</a> */}
                                    </div>

                                </div>

                                <div className='student_contact'>
                                    <h3>Contact</h3>
                                    <div className='contact_01'>
                                        <div className='contact_01_mail'>
                                            <a href="#"><MdEmail /></a>
                                        </div>
                                        <div className='conatct_02'>
                                            <p className='contact_parah'>Email</p>
                                            <a href='mailto:monikapardeshi@gmail.com'>monikapardeshi@gmail.com</a>
                                            {/* <p>monikapardeshi@gmail.com</p> */}
                                        </div>
                                    </div>

                                    <div className='contact_01'>
                                        <div className='contact_01_mail'>
                                            <a href='#'><IoMdCall /></a>
                                        </div>
                                        <div className='conatct_02'>
                                            <p className='contact_parah'>Phone Number</p>
                                            {/* <p>9202686045</p> */}
                                            <a href="tel:+911234567890">9202686045</a>
                                        </div>
                                    </div>
                                    <div className='contact_01'>
                                        <div className='contact_01_mail'>
                                            <a href='#'><IoMdHome /></a>
                                        </div>
                                        <div className='conatct_02'>
                                            <p className='contact_parah'>Address</p>
                                            <p>Station Road, Ujjain</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='student_details_second'>
                            <div className='right_section'>
                                <a href='#'>Student Details</a>
                            </div>
                            <div className='form-section'>
                                <form>
                                    <div className='right_form_section'>
                                        <div className='form_left'>
                                            <div className='inputs'>
                                                <label htmlFor="fname">Student Name</label>
                                                <input type="text" name="fname" placeholder='Enter the name' />
                                            </div>
                                            <div className='inputs'>
                                                <label htmlFor="fname">Mobile Number</label>
                                                <input type="text" placeholder='Enter Mobile number' />
                                            </div>
                                            <div className='inputs'>
                                                <label htmlFor="fname">Father's Name</label>
                                                <input type="text" placeholder='Enter parents name ' />
                                            </div>

                                            <div className='inputs'>
                                                <label htmlFor="fname">Email</label>
                                                <input type="text" placeholder='Enter email' />
                                            </div>
                                            <div className='inputs'>
                                                <label htmlFor="lname">Gender</label>
                                                <select className='form-select'>
                                                    <option>Female</option>
                                                    <option>Male</option>
                                                </select>

                                            </div>

                                        </div>
                                        <div className='form_right'>
                                            <div className='inputs'>
                                                <label htmlFor="fname">Ves Id</label>
                                                <input type="text" placeholder='Enter ID number' />
                                            </div>
                                            <div className='inputs'>
                                                <label htmlFor="fname">Emergency Number</label>
                                                <input type="text" placeholder='Enter Mobile number' />
                                            </div>
                                            <div className='inputs'>
                                                <label htmlFor="lname">Father's Number</label>
                                                <input type="text" placeholder='Enter mobile number' />
                                            </div>
                                            <div className='inputs'>
                                                <label htmlFor="fname">Date of Birth</label>
                                                <input className='date-input' type="date" id="date" name="date" />
                                            </div>
                                            <div className='inputs'>
                                                <label htmlFor="fname">Registration Date</label>
                                                <input className='date-input' type="date" id="date" name="date" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='inputs address'>
                                        <label htmlFor="lname">Address</label>
                                        <input type="text" placeholder='Enter the address' />
                                    </div>
                                    <div className='form-btn'>
                                        <button>Submit</button>
                                    </div>
                                </form>

                            </div>

                        </div>

                        {/* <div className='student_details_third'></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


