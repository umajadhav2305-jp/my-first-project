import React from 'react'

export default function page() {
    return (
        <>
            <div className='apply_form'>
                <div className='apply_form_wr'>
                    <h3>Apply Leave</h3>
                </div>
                <div className='apply_grid'>
                    <form>
                        <div className='apply_forms'>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" placeholder=" Enter your Title..." required></input>
                        </div>
                        <div className='apply_forms'>
                            <label htmlFor="date">Choose Date:</label>
                            <input type="date" id="date" name="date"></input>

                            <label htmlFor="from">From:</label>
                            <input type="date" id="from" name="from_date" />

                            <label htmlFor="to">To:</label>
                            <input type="date" id="to" name="to_date"></input>
                        </div>
                        <div className='apply_forms'>
                            <label htmlFor="reason">Reason</label>
                            <textarea id="reason" name="reason" rows="4" cols="40" placeholder="Enter your reason..." required></textarea>
                        </div>
                        <div className='apply_btn'>
                            <button>Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


