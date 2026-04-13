import React from 'react'
export default function page() {
    return (
        <>
            <div className='student_form'>
                <div className='student_form_wr'>
                    <div className='student_heading'>
                        <h2>Add New Student</h2>
                    </div>
                    <form>
                        <div className='student_form_inputs'>
                            <div className='student_form_grid'>
                                <div className='student_form_left'>
                                    <div className="form-group">
                                        <label htmlFor="studentName"> Name</label>
                                        <input type="text" id="studentName" name="studentName" placeholder="Enter your Name" required />
                                    </div>
                                    <div className='form_fmname'>
                                        <div className="form-group">
                                            <label htmlFor="fatherName">Father's Name</label>
                                            <input type="text" id="fatherName" name="fatherName" placeholder="Enter your Father's name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="motherName">Mother's Name</label>
                                            <input type="text" id="motherName" name="motherName" placeholder="Enter your Mother's name" required />
                                        </div>
                                    </div>
                                    <div className="form-group gender">
                                        <label htmlFor="gender">Gender</label>
                                        <label className="gender-option">
                                            <input type="radio" name="gender" value="male" />
                                            <span>Male</span>
                                        </label>
                                        <label className="gender-option">
                                            <input type="radio" name="gender" value="female" />
                                            <span>Female</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="upload_box">
                                    <h3>Upload a File</h3>
                                    <div className="drop_area">
                                        <div className="file_icon">📄</div>
                                        <p>Drag file here</p>
                                        <span>or</span>
                                        <label htmlFor="fileInput" className="select_btn">Select File</label>
                                        <input type="file" id="fileInput" hidden />
                                    </div>
                                </div>



                            </div>
                            <div className='student_form_wrrp'>
                                <div className='student_form_left'>
                                    <div className="forms_birth">
                                        <label htmlFor="birthDate">Birth Date</label>
                                        <input type="date" id="birthDate" name="birthDate" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" id="phone" name="phone" placeholder="Enter your Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="school">School / College</label>
                                        <input type="text" id="school" name="school" placeholder="Enter your School/College Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="feesDate">Fees Date</label>
                                        <input type="date" id="feesDate" name="feesDate" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="course">Course Name</label>
                                        <input type="text" id="course" name="course" placeholder="Enter your Course Name" />
                                    </div>
                                </div>
                                <div className='student_form_right'>
                                    <div className="forms_birth">
                                        <label htmlFor="joiningDate">Joining Date</label>
                                        <input type="date" id="joiningDate" name="joiningDate" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" id="city" name="city" placeholder="Enter your city Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="whatsapp">WhatsApp</label>
                                        <input type="tel" id="whatsapp" name="whatsapp" placeholder="Enter your WhatsApp Number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="month">Select Month</label>
                                        <div className="custom-select">
                                            <select id="month" name="month">
                                                <option value="">All Months</option>
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
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <textarea id="address" name="address" rows="4" placeholder="Enter your Address"></textarea>
                            </div>
                            <div className='form_btn'>
                                <button>Submit</button>
                                {/* <input type="submit" value="Submit"></input> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


