import React from 'react'
import Image from 'next/image'
import { HiEye } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';


const page = () => {
    return (
        <div>
            <div className="section_01_login ves_login">
                <div className="container_login">
                    <div className="login_wr">
                        <div className="login_right">
                            <div className="login_erp">
                                <Image
                                    src="/assets/image/erplogin.png"
                                    width={612}
                                    height={407}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="login_left">
                            <div className="login_logo">
                                <Image
                                    src="/assets/image/Logo.png"
                                    width={200}
                                    height={60}
                                    alt="Picture of the author"
                                />


                                <h1>hello uma</h1>



                                
                            </div>
                            <div className="login_heading">
                                <h2>Welcome Back!</h2>

                                <p>Welcome back, please login to your account.</p>
                            </div>
                            <div className="form_section">
                                <form action="">
                                    <div className='input_wr mb-20'>
                                        <label >Email Address</label>

                                        <div className='input_icon'>
                                            <input className='custom_input' type="email" defaultValue="" placeholder="Enter Email Address" />
                                            <span><MdEmail /></span>
                                        </div>
                                    </div>
                                    <div className='input_wr'>
                                        <label >Password</label>
                                        <div className='input_icon'>
                                            <input className='custom_input' type="password" defaultValue="" placeholder="Enter Your Password" />
                                            <span><HiEye /></span>
                                        </div>
                                    </div>
                                    <div className="remember_box">
                                        <div className="checkbox-wrapper-65">
                                            <label htmlFor="cbk1-65">
                                                <input type="checkbox" id="cbk1-65" />
                                                <span className="cbx">
                                                    <svg width="12px" height="11px" viewBox="0 0 12 11">
                                                        <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                                                    </svg>
                                                </span>
                                                <span>Remember me</span>
                                            </label>
                                        </div>
                                        <Link href="/forgot">Forgot Password?</Link>
                                    </div>
                                    <div className="login_btn">
                                        <button>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
