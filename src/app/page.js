import React from 'react'
import Image from 'next/image'
import { LiaUsersSolid } from "react-icons/lia";

const Page = () => {
    return (
        <div className='ves_main_wr'>
            <div className="section_02_wrap dashboard">
                <div className="section_02_item">
                    <div className="item_section_02">
                        <h3>932</h3>
                        <p>Total Students</p>
                    </div>
                    <div className="items_section_2 man_01">
                        <a href='#'><LiaUsersSolid /></a>
                    </div>
                </div>
                <div className="section_02_item">
                    <div className="item_section_02">
                        <h3>754</h3>
                        <p>Active Students</p>
                    </div>
                    <div className="items_section_2 man_02">
                        <Image
                            src="/assets/image/man_02.png"
                            width={40}
                            height={40}
                            alt="Active Students"
                        />
                    </div>
                </div>
                <div className="section_02_item">
                    <div className="item_section_02">
                        <h3>40</h3>
                        <p>Present Students</p>
                    </div>
                    <div className="items_section_2 man_03">
                        <Image
                            src="/assets/image/man_03.png"
                            width={40}
                            height={40}
                            alt="Present Students"
                        />
                    </div>
                </div>
                <div className="section_02_item">
                    <div className="item_section_02">
                        <h3>20</h3>
                        <p>Absent Students</p>
                    </div>
                    <div className="items_section_2 man_04">
                        <Image
                            src="/assets/image/man_04.png"
                            width={40}
                            height={40}
                            alt="Absent Students"
                        />
                    </div>
                </div>
            </div>

            <div className='active_status_wr'>
                <div className='active_status_grid'>
                    <p>Active Status</p>
                    <p className='active_dot'>In</p>
                </div>
            </div>

            <div className='dashboard_status'>
                {/* Leave Status */}
                <div className='dashboard_leave'>
                    <h3>Leave Status</h3>
                    <div className='holiday_table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Monika Pardeshi</td>
                                    <td>01/09/2025</td>
                                    <td>Monday</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Uma Jadhav</td>
                                    <td>30/08/2025</td>
                                    <td>Saturday</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Lucky Mathur</td>
                                    <td>30/08/2025</td>
                                    <td>Saturday</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Akshat Chawda</td>
                                    <td>01/09/2025</td>
                                    <td>Monday</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Archana Gupta</td>
                                    <td>04/08/2025</td>
                                    <td>Thursday</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Yash Devre</td>
                                    <td>17/08/2025</td>
                                    <td>Wednesday</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Anjali Sharma</td>
                                    <td>05/08/2025</td>
                                    <td>Tuesday</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Shivangi Kachawa</td>
                                    <td>02/09/2025</td>
                                    <td>Friday</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Sonam Thalur</td>
                                    <td>21/08/2025</td>
                                    <td>Saturday</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Nitya Thakur</td>
                                    <td>15/08/2025</td>
                                    <td>Tuesday</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Nikita Vaishnav</td>
                                    <td>17/08/2025</td>
                                    <td>Monday</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Pooja Kushwah</td>
                                    <td>26/08/2025</td>
                                    <td>Wednesday</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Anajli Khichi</td>
                                    <td>27/08/2025</td>
                                    <td>Thursday</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Reena Solanki</td>
                                    <td>30/08/2025</td>
                                    <td>Thursday</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Shradha Gupta</td>
                                    <td>13/08/2025</td>
                                    <td>Saturday</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Holidays */}
                <div className='dashboard_leave'>
                    <h3>Holidays</h3>
                    <div className='holiday_table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Holiday Title</th>
                                    <th>Date</th>
                                    <th>Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Rakshabandhan (Rakhi)</td>
                                    <td>09/08/2025</td>
                                    <td>Saturday</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Independence Day</td>
                                    <td>15/08/2025</td>
                                    <td>Friday</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Janamasthmi</td>
                                    <td>16/08/2025</td>
                                    <td>Saturday</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Ganesh Chaturthi</td>
                                    <td>27/08/2025</td>
                                    <td>Wednesday</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Onam</td>
                                    <td>05/09/2025</td>
                                    <td>Friday</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Shrad Navratri</td>
                                    <td>22/09/2025</td>
                                    <td>Monday</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Teachers Day</td>
                                    <td>05/09/2025</td>
                                    <td>Friday</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Milad-un-Nabi</td>
                                    <td>06/09/2025</td>
                                    <td>Saturday</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Onam Festival</td>
                                    <td>08/09/2025</td>
                                    <td>Monday</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Vishwakarma Puja</td>
                                    <td>10/09/2025</td>
                                    <td>Monday</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Mahalaya Amavasya</td>
                                    <td>27/09/2025</td>
                                    <td>Saturday</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Maharaja Agrasen Jayanti</td>
                                    <td>28/09/2025</td>
                                    <td>Sunday</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Durga Puja (Start)</td>
                                    <td>29/09/2025</td>
                                    <td>Monday</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Durga Puja (Maha Saptami)</td>
                                    <td>30/09/2025</td>
                                    <td>Tuesday</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Maha Navami</td>
                                    <td>01/10/2025</td>
                                    <td>Thursday</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
