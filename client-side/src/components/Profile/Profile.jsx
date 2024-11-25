import React, { useEffect, useState } from 'react'
import './Profile.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import user_icon from './person.png'


const Profile = ({setUser}) => {
    const navigate=useNavigate()
    const token = localStorage.getItem("Token")
    const [userData,setUserData]=useState({})
    const [profileData,setProfileData]=useState({})
    const [proBool,setProBool]=useState(false);

    useEffect(()=>{
        fetchUserData()

    },[])

    const fetchUserData=async()=>{
        const res = await axios.get("http://localhost:3000/api/getuserdata",{headers:{"Authorization":`Bearer ${token}`}})
        console.log(res);
        
        if(res.status==200){
            setUserData(res.data.userData)
            res.data.profileData?setProfileData(res.data.profileData):setProfileData({})
            res.data.profileData?setProBool(true):setProfileData(false)
        }
        

    }
  return (
    <>
     <div className="prof-container">
        <div className="left" id="left">
        <table className="table">
            <div className="img">
                <img src="" alt="" />
            </div>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{userData.username}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{proBool?profileData.gender:'-'}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{userData.email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{proBool?profileData.phone:'-'}</td>
                    </tr>
                    <tr>
                        <th>Bio</th>
                        <td className='bio'>{proBool?profileData.bio:"-"}</td>
                    </tr>
                   
                   
                   
                    <tr>
                        <td className="actions" colSpan="2">
                          <Link to={'/editprofile'}> <button type="button" className="edit-btn">{proBool?'Edit Profile':'Create Profile'}</button></Link>
                            <button type="button" className="delete-btn"  >DELETE</button><br />
                        <button type="button" className="log-out-btn"  onClick={()=>{
                            localStorage.removeItem('Token')
                            setUser("")
                            navigate('/')
                            }}>LOGOUT</button>

                        </td>
                    </tr>
                    
                </tbody>
                </table>

        </div>
        <div className="right" id="right">
        <div className="men-cards" id="products">
                
                    
                    {/* <div className="men-card">
                  <div className="images">
                    <img src="" alt=""/>
                  </div>
                  <div className="content">
                     <span className="product-name">$</span><br/>
                     <span className="price">₹$</span><br/>
                  </div>
                  
                </div> */}

            </div>
          
            
        </div>
       

        </div>
       
            
           
        
   

    </>
  )
}

export default Profile