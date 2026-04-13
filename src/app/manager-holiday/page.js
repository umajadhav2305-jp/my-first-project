import React from 'react'
import { IoSearch } from "react-icons/io5";
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
                <a href="#"> <span>+ Holiday</span></a>
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
                <th>Tittle</th>
                <th>Date</th>
                <th>Day</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>Teachers Day</td>
                <td>05/09/2025</td>
                <td>Friday</td>
                <td>India-wide (celebrations/half-day)</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>2</td>
                <td>Id-e-Milad</td>
                <td>05/09/2025</td>
                <td>Friday</td>
                <td>Multiple states</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>3</td>
                <td>Anant Chaturdashi</td>
                <td>07/09/2025</td>
                <td>Sunday</td>
                <td>Maharashtra, Goa, Karnataka</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>4</td>
                <td>Vishwakarma Puja</td>
                <td>17/09/2025</td>
                <td>Wednesday</td>
                <td>	Bengal, Odisha, Bihar, Assam</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>5</td>
                <td>	Samvatsari</td>
                <td>21/09/2025</td>
                <td>Sunday</td>
                <td>	Gujarat, Rajasthan, Maharashtra</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>6</td>
                <td>	Maharaja Hari Singh Jayanti</td>
                <td>23/09/2025</td>
                <td>Tuesday</td>
                <td>Jammu & Kashmir</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>7</td>
                <td>	Mahalaya Amavasya</td>
                <td>27/09/2025</td>
                <td>Saturday</td>
                <td>Bengal, Assam, Odisha</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>8</td>
                <td>Navratri & Durga Puja</td>
                <td>29/09/2025</td>
                <td>Monday</td>
                <td>Gujarat, Maharashtra, Bengal, Assam, Bihar, UP, Odisha</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>9</td>
                <td>Maha Navami</td>
                <td>01/10/2025</td>
                <td>Saturday</td>
                <td>Arunachal Pradesh,Madhya Pradesh, Assam, Bihar, Jharkhand, Karnataka,</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>10</td>
                <td>Gandhi Jayanti</td>
                <td>02/10/2025</td>
                <td>Sunday</td>
                <td>National</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>11</td>
                <td>Lakshmi Puja</td>
                <td>06/10/2025</td>
                <td>Thursday</td>
                <td>Haryana, Karnataka, Maharashtra, Rajasthan, Uttarakhand & Uttar Pradesh
                </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>12</td>
                <td>	Bhai Dooj</td>
                <td>23/10/2025</td>
                <td>Sunday</td>
                <td>Gujarat, Rajasthan, Sikkim, Uttarakhand & Uttar Pradesh</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>13</td>
                <td>Ningol Chakkouba</td>
                <td>24/10/2025</td>
                <td>Monday</td>
                <td>Manipur</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>14</td>
                <td>	Chhath Puja</td>
                <td>27/10/2025</td>
                <td>Monday</td>
                <td>Bihar, Chhattisgarh, Daman and Diu, Dadra and Nagar Haveli & Jharkhand
                </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>15</td>
                <td>Chhath Puja Holiday</td>
                <td>28/10/2025</td>
                <td>Tuesday</td>
                <td>Bihar</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>16</td>
                <td>Sardar Vallabhbhai Patel Jayanti</td>
                <td>31/10/2025</td>
                <td>Friday</td>
                <td>Gujarat</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>17</td>
                <td>Haryana Day</td>
                <td>01/11/2025</td>
                <td>Saturday</td>
                <td>Haryana</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>18</td>
                <td>Karthika Purnima</td>
                <td>05/11/2025</td>
                <td>Wednesday</td>
                <td>Orissa & Telangana</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>19</td>
                <td>Wangala Festival</td>
                <td>07/11/2025</td>
                <td>Friday</td>
                <td>Meghalaya</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>20</td>
                <td>Kanakadasa Jayanti</td>
                <td>08/11/2025</td>
                <td>Saturday</td>
                <td>Karnataka</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>21</td>
                <td>Lhabab Duchen</td>
                <td>11/11/2025</td>
                <td>Tuesday</td>
                <td>Sikkim</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>22</td>
                <td>Seng Kut Snem</td>
                <td>23/11/2025</td>
                <td>Sunday</td>
                <td>Meghalaya</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>23</td>
                <td>Sri Guru Teg Bahadur Ji’s Martyrdom Day</td>
                <td>24/11/2025</td>
                <td>Monday</td>
                <td>Punjab</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>24</td>
                <td>Indigenous Faith Day</td>
                <td>01/12/2025</td>
                <td>Monday</td>
                <td>Arunachal Pradesh</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>25</td>
                <td>Feast of St Francis Xavier</td>
                <td>03/12/2025</td>
                <td>Wednesday</td>
                <td>Goa</td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>26</td>
                <td>Sheikh Muhammad Abdullah Jayanti </td>
                <td>05/12/2025</td>
                <td>Friday</td>
                <td>Jammu and Kashmir </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>27</td>
                <td>Pa Togan Nengminza Sangma </td>
                <td>12/12/2025</td>
                <td>Friday</td>
                <td>Meghalaya </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>28</td>
                <td>Death Anniversary of U SoSo Tham </td>
                <td>18/12/2025</td>
                <td>Thursday</td>
                <td>Meghalaya </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>29</td>
                <td>Guru Ghasidas Jayanti </td>
                <td>18/12/2025</td>
                <td>Thursday</td>
                <td>Chhattisgarh </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>30</td>
                <td>Liberation Day </td>
                <td>19/12/2025</td>
                <td>Friday</td>
                <td>Daman and Diu, Goa </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>31</td>
                <td>Christmas Holiday </td>
                <td>25/12/2025</td>
                <td>Thursday</td>
                <td>National </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>32</td>
                <td>Shaheed Udham Singh Jayanti </td>
                <td>26/12/2025</td>
                <td>Friday</td>
                <td>Haryana </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>33</td>
                <td>Tamu Losar </td>
                <td>30/12/2025</td>
                <td>Tuesday</td>
                <td>Sikkim </td>
                <td className='date action' >
                  <a className='call01' href='#'><MdOutlineModeEditOutline /></a>
                  <a className='call02' href='#'><RiDeleteBinLine /></a>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>34</td>
                <td>New Year's Eve </td>
                <td>31/12/2025</td>
                <td>Wednesday</td>
                <td>Manipur and Mizoram </td>
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
