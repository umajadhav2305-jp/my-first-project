"use client";
import React, { useState } from 'react';
import { Modal } from 'antd';
import { IoSearch, IoSettings, IoLogOut } from "react-icons/io5";
import { MdEmail, MdMessage } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import Image from 'next/image';

const App = () => {
    const [modal2Open, setModal2Open] = useState(false);
    const [user, setuser] = useState("")
    return (
        <>
            <div className="topbar_right">
                <div className="topbar_navbar">

                    {/* Search Box */}
                    <div className="topbar_nav navs" >
                        <div className="srch_btn">
                            <a href="#"><IoSearch /></a>
                        </div>
                        <div className="srch_btn">
                            <input onChange={(e) => setuser(e.target.value)} placeholder='Find Something...' />
                        </div>

                    </div>
                    <div className='search_topbar'>
                        <p><IoSearch />{user}</p>
                    </div>
                    {/* Right Icons */}
                    <div className="topbar_nav">
                        <div className="topbar_right_icons">

                            {/* Mail Icon */}
                            <div className='top_right_icons01'>
                                <a href="#"><MdEmail /></a>
                            </div>

                            {/* Profile Dropdown */}
                            <div className="top_right_icons01 profile_dropdown">
                                <div className="profile_img">
                                    <Image
                                        src="/assets/image/man.png"
                                        width={32}
                                        height={32}
                                        alt="User"
                                    />
                                </div>

                                <div className='users'>
                                    <a href='studentdetails'><IoMdPerson /> Profile</a>
                                    <a href='#'><MdMessage /> Message</a>
                                    <a href='#'><IoSettings /> Setting</a>
                                    <a
                                        className='users_logout'
                                        href='#'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setModal2Open(true);
                                        }}
                                    >
                                        <IoLogOut /> Logout
                                    </a>
                                </div>
                            </div>

                            {/* Logout Modal */}
                            <Modal
                                title="Confirm Logout"
                                centered
                                open={modal2Open}
                                onOk={() => setModal2Open(false)}
                                onCancel={() => setModal2Open(false)}
                            >
                                <p>Are you sure you want to logout?</p>
                            </Modal>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default App;
