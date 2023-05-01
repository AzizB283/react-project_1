import React from 'react'
import { useNavigate } from 'react-router-dom'


function About() {

function ContactPage(){
    navigate("/contact");
}

    const navigate = useNavigate();
  return (
    <>
    <h1>About</h1>
    <p>Redirect using useNavigate() hook</p>
    <button className='my-4 btn btn-primary mx-2' onClick={ContactPage}>Contact Us</button>
    </>
  )
}

export default About