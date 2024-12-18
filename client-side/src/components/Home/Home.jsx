import axios from 'axios';
import React, { useEffect,useState } from 'react'
import './Home.scss'
import heart from './heart.png'
import chat from './chat-bubble.png'
import send from './send.png'
import save from './save-instagram.png'


import { useNavigate } from 'react-router-dom';

const Home = ({setUser,setProfile}) => {
  const navigate=useNavigate()
  const token = localStorage.getItem("Token")
  const [posts,setPost]=useState([])
  const [images,setImages]=useState([])
useEffect(()=>{
getUser()
},[])
  
  const getUser=async()=>{
   if(token){
    try {
      const res= await axios.get("http://localhost:3000/api/getuser",{headers:{"Authorization":`Bearer ${token}`}})
      // console.log(res);
      if(res.status==200){
        setUser(res.data.username)
        if(res.data.profile){
          setProfile(res.data.profile.profile)
        }
        getPosts()
      }
      else if(res.status==403){
        console.log("unauth");
        alert(res.data.msg)
        navigate('/signin')
      }
      else{
        navigate('/signin')

      }
      } catch (error) {
      console.log(error);
      navigate('/signin')
      
    }
   }
   else{
    navigate('/signin')
   }
   
  }
  
  const getPosts=async()=>{
    const res=await axios.get("http://localhost:3000/api/getallposts")
    console.log(res.data)
    setPost(res.data)
    // setImages(res.data)
    
    
  }

  console.log(posts);
  
  return (
   <>
   <div className="postmain">
    {posts.map((post)=>
      <div className="post">
      {/* <div className="info">
          <div className="user">
              <div className="profile-pic">
                <img src="" alt=""/>
              </div>
              <p className="username">modern_web_channel</p>
          </div>
          <img src="" className="options" alt=""/>
      </div> */}
      
      <ul className="list">
        {post.images.map((image ,index)=> <li key={index} className="item"><img src={image} alt="" />
        </li>)}
        </ul>
      <div className="post-content">
          <div className="reaction-wrapper">
              <img src={heart} className="icon" alt=""/>
              <img src={chat} className="icon" alt=""/>
              <img src={send} className="icon" alt=""/>
              <img src={save} style={{marginLeft:"300px"}} className="icon" alt=""/>

              
          </div>
          <p className="likes">1,012 likes</p>
          <p className="description"><span>username </span> {post.description}</p>
          <p className="post-time">{post.postedDate}</p>
          <p className="post-time" style={{float:"right"}}>{post.postedTime}</p>

      </div>
      <div className="comment-wrapper">
          <img src="img/smile.PNG" className="icon" alt=""/>
          <input type="text" className="comment-box" placeholder="Add a comment"/>
          <button className="comment-btn">post</button>
      </div>
  </div>
    )}
   </div>
    
   </>

  )
}

export default Home