import React from 'react'
import Image from 'next/image'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
const page = () => {
    return (
        <div className='ves_main_wr'>
            <div className='container'>
                <div className="section_data_navbar">
                    <div className="section_student_nav">
                        <div className="student_nav">
                            <div className="student_search">
                                <div className='srch_nav'>
                                    <a href="#"><IoSearch /> </a>
                                </div>
                                <div className='srch_nav'>
                                    <input type="text" placeholder='Search here...' />
                                </div>

                            </div>
                        </div>
                        <div className="student_nav">
                            <div className="btn_nav_01 btn_02">
                                     <Link href='/applyleave'>Apply Leave</Link>
                                {/* <a href="#"> <span>Apply Leave</span></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_table_data_01">
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>Sr No.</th>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Leave Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td className='id'>ID Ves01</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/woman.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Monika Pardeshi</Link></td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>2</td>
                                <td className='id'>ID Ves02</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/girl1.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Uma Jadhav</Link></td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>3</td>
                                <td className='id'>ID Ves01</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/girl2.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Archana Gupta</Link></td>
                                <td className='apsent'><span>Pending</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>4</td>
                                <td className='id'>ID Ves04</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/girl3.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Nikita Vaishnav</Link></td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>5</td>
                                <td className='id'>ID Ves05</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/woman.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Anjali Sharma</Link></td>
                                <td className='apsent'><span>Pending</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>6</td>
                                <td className='id'>ID Ves07</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/man1.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Lucky Mathur</Link></td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>7</td>
                                <td className='id'>ID Ves07</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/girl2.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Riya Mehra</Link> </td>
                                <td className='apsent'><span>Pending</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>8</td>
                                <td className='id'>ID Ves11</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/man4.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Akshat Chawda</Link></td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>9</td>
                                <td className='id'>ID Ves09</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/woman.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Shivangi Kachawa</Link></td>
                                <td className='apsent'><span>Pending</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>10</td>
                                <td className='id'>ID Ves10</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/girl1.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Nitya Thakur</Link></td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>11</td>
                                <td className='id'>ID Ves20</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/man4.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Yash Devre</Link> </td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>12</td>
                                <td className='id'>ID Ves08</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/man3.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Jayant Malviya</Link></td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>13</td>
                                <td className='id'>ID Ves03</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/man3.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Prince Kushwah</Link></td>
                                <td className='apsent'><span>Pending</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>14</td>
                                <td className='id'>ID Ves13</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/girl3.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Zobiya Sayed</Link>
                                </td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>15</td>
                                <td className='id'>ID Ves30</td>
                                <td className='girl'>
                                    <Image
                                        src="/assets/image/man4.png"
                                        width={32}
                                        height={32}
                                        alt="Picture of the author"
                                    />
                                    <Link href="/studentdetails">Nikhil Thakur</Link></td>
                                <td className='present'><span>Approved</span></td>
                                <td className='date action' >
                                    <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                                    <a className='call02' href='#'><RiDeleteBinLine /></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default page
