import React from 'react'
import { IoSearch } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from 'next/link';


export default function page() {
    return (
        <>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="section_table_data_01">
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>Sr No</th>
                                        <th> Apply Date</th>
                                        <th>Leave Days</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody className='attendence_wr'>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>1</td>

                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>

                                                <p>4 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='apsent'><span>Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>2</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>2 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='present'><span>Approved</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>3</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>5 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='apsent'><span>Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>4</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>3 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='present'><span>Approved</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>5</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>5 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='apsent'><span>Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>6</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>6 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='present'><span>Approved</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>7</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                               <p>7 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='apsent'><span>Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>8</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>4 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='present'><span>Approved</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>9</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>3 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='apsent'><span>Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>10</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>2 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='present'><span>Approved</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>11</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>7 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='apsent'><span>Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>12</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>5 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='present'><span>Approved</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>13</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>9 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='apsent'><span>Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>14</td>
                                        <td>02/06/2025</td>
                                        <td>
                                            <div className='leaves'>
                                                <p>8 Days</p>
                                                <span><MdOutlineRemoveRedEye /></span>
                                            </div>
                                        </td>
                                        <td className='present'><span>Approved</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


