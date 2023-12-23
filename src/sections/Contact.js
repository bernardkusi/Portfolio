import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';







const Contact = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
const [name,setname]=useState("");
const [namefield,setnamefield]=useState("Name");

const [email,setemail]=useState("");
const [emailfield,setemailfield]=useState("Email");

const [message,setmessage]=useState("");
const [messagefield,setmessagefield]=useState("Message");

const [nameerror,setnameerror]=useState("");
const [emailerror,setemailerror]=useState("");
const [messageerror,setmessageerror]=useState("");

const changename=(result)=>{
  setname(result);
  console.log(name);
  if(result.length>0){
    setnamefield("");
  }else{
    setnamefield("Name");
  }
}

const changemessage=(result)=>{
  setmessage(result);
  console.log(message);
  if(result.length>0){
    setmessagefield("");
  }else{
    setmessagefield("Message");
  }
}

const changeemail=(result)=>{
  setemail(result);
  if(result.length>0){
    setemailfield("");
  }else{
    setemailfield("Email");
  }
} 

const validate=()=>{
  if(name.length===0){setnameerror("Name field cannot be empty")}
  else if(name.length<5){
    setnameerror("Name must be over 4 charecters")
  }else{
    setnameerror("")
  }

  if(email.length===0){setemailerror("Email field cannot be empty")}
  else if(email.length<10){
    setemailerror("Email is invalid")
  }else{
    setemailerror("")
  }

  if(message.length===0){setmessageerror("Message field cannot be empty")}
  else if(message.length<11){
    setmessageerror("message must be over 10 charecters")
  }else{
    setmessageerror("")
  }

  console.log(name+email+message)


}

  return (
    <div id='contact'>
        <p className="heading">Get in touch </p>
        <div className="contactflex">
          <div className="form"  data-aos="fade-right" data-aos-duration="600">
            <p className="label">Send Me A Message</p>
            <div className="formcontrol">
            <input type="text" name="name" id='name' value={name} onChange={(e)=>{changename(e.target.value)}} />
            <label htmlFor="name">{namefield}</label>
            <small className="error">{nameerror}</small>
            </div>
           
           <div className="formcontrol">
           <input type="text" name="email" id="email" value={email} onChange={(e)=>{changeemail(e.target.value)}} />
           <label htmlFor="email">{emailfield}</label>
           <small className="error">{emailerror}</small>
           </div>
           <div className="formcontrol">
             <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e)=>{changemessage(e.target.value)}}></textarea>
             <label htmlFor="message">{messagefield}</label>
             <small className="error">{messageerror}</small>
           </div>
           <button onClick={validate}>Send Message</button>
            
          </div>

          <div className="map"  data-aos="fade-left" data-aos-duration="600">
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4456.659146017133!2d-0.19809775558924458!3d5.650492153519462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1630226225683!5m2!1sen!2sgh"
                style={{width:100+"%" ,height:100+"%" ,border:0 ,allowFullScreen:"" ,loading:"lazy"}}>

                </iframe>
            </div>

          </div>
        </div>
    // </div>
  )
}

export default Contact