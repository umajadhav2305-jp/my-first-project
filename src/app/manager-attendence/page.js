import React from 'react'
import Image from 'next/image'
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
                {/* <div className="btn_nav_01 btn_02">
                                    <a href="#">Student Attendance</a>
                                </div> */}
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
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Status</th>

                  </tr>
                </thead>
                <tbody className='attendence_wr'>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>1</td>
                    <td className='id'>ID Ves01</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/woman.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Monika Pardeshi</td>
                    <td className='present'><span>Present</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>2</td>
                    <td className='id'>ID Ves02</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/girl1.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Uma Jadhav</td>
                    <td className='apsent'><span>Apsent</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>3</td>
                    <td className='id'>ID Ves01</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/girl2.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Archana Gupta</td>
                    <td className='apsent'><span>Apsent</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>4</td>
                    <td className='id'>ID Ves04</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/girl3.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Nikita Vaishnav</td>
                    <td className='present'><span>Present</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>5</td>
                    <td className='id'>ID Ves05</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/woman.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Anjali Sharma</td>
                    <td className='present'><span>Present</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>6</td>
                    <td className='id'>ID Ves07</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/man1.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Lucky Mathur</td>
                    <td className='apsent'><span>Apsent</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>7</td>
                    <td className='id'>ID Ves07</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/girl2.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Riya Mehra</td>
                    <td className='present'><span>Present</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>8</td>
                    <td className='id'>ID Ves11</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/man4.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Akshat Chawda</td>
                    <td className='apsent'><span>Apsent</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>9</td>
                    <td className='id'>ID Ves09</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/woman.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Shivangi Kachawa</td>
                    <td className='apsent'><span>Apsent</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>10</td>
                    <td className='id'>ID Ves10</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/girl1.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Nitya Thakur</td>
                    <td className='present'><span>Present</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>11</td>
                    <td className='id'>ID Ves20</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/man4.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Yash Devre </td>
                    <td className='apsent'><span>Apsent</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>12</td>
                    <td className='id'>ID Ves08</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/man3.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Jayant Malviya</td>
                    <td className='present'><span>Present</span></td>

                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>13</td>
                    <td className='id'>ID Ves03</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/man3.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Prince Kushwah</td>
                    <td className='apsent'><span>Apsent</span></td>

                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>14</td>
                    <td className='id'>ID Ves13</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/girl3.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Zobiya Sayed
                    </td>
                    <td className='apsent'><span>Apsent</span></td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>14</td>
                    <td className='id'>ID Ves30</td>
                    <td className='girl_managerattendence'>
                      <Image
                        src="/assets/image/man1.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                      />
                      Nikhil Thakur
                    </td>
                    <td className='apsent'><span>Apsent</span></td>
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


