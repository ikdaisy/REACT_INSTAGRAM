import React from 'react'
import './EditProfile.css'

const EditProfile = () => {
  return (
   <>
   <div className='body'>
   <div className="e-container">
        <h2>Edit Information</h2>
        <form>
            <label htmlFor="inputField">Name:</label>
            <input type="text" className='name' id="inputField" name="inputField" placeholder=""/>
            <label htmlFor="inputField">Gender:</label>
            <input type="radio" name="gender" id="gender"  value="Male" /><span className="male">Male</span>
                        <input type="radio" name="gender" id="gender"  value="Female" /><span>Female</span>
                        <input type="radio" name="gender" id="gender"  value="Other" /><span>Other</span> 
            <label htmlFor="inputField">Email:</label>
            <input type="email" className='' id="inputField" name="inputField" placeholder=""/>

            <label htmlFor="inputField">Phone:</label>
            <input type="text" className='phone' id="inputField" name="inputField" placeholder=""/>
            <label htmlFor="inputField">Bio:</label>
            <input type="text" className='bio' id="inputField" name="inputField" placeholder=""/>
            <label htmlFor="inputField">Profile:</label>
            <input type="file"  id="profile" className="profile" />

            <button className='edit' type="submit">Edit</button>
        </form>
        <div className="footer">

        </div>

    </div>
   </div>

   </>
  )
}

export default EditProfile