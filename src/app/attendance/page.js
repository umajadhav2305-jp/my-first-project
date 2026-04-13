import { Select } from '@mui/material';
import React from 'react'
import { IoSearch } from "react-icons/io5";


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
                                    <select>
                                        <option>All Months</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
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
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Leave Status</th>
                                        <th>In Time</th>
                                        <th>Out Time</th>
                                        <th> Total Time</th>
                                    </tr>
                                </thead>
                                <tbody className='attendence_wr'>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>1</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>2</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>01:00</td>
                                        <td>04:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>3</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>4</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>5</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>6</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>7</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>8</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>9</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>10</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>11</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>12</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>

                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>13</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>

                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>14</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>15</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>16</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>01:00</td>
                                        <td>04:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>17</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>18</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>19</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>20</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>21</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>22</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>23</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>24</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>25</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>26</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>

                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>27</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>

                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>28</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>29</td>
                                        <td>02/06/2025</td>
                                        <td className='apsent'><span>Apsent</span></td>
                                        <td>Halfday</td>
                                        <td>09:00</td>
                                        <td>02:00</td>
                                        <td>05:00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>30</td>
                                        <td>02/06/2025</td>
                                        <td className='present'><span>Present</span></td>
                                        <td>Fullday</td>
                                        <td>09:00</td>
                                        <td>03:00</td>
                                        <td>06:00</td>
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


