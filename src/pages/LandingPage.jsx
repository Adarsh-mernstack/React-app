import React from 'react'
import ReactImg from '../assets/ReactImg.png'
import { useNavigate } from 'react-router-dom'
function LandingPage() {

   const navigate = useNavigate()

  const changePage=()=>{
    navigate('./login')
  }
  return (
    <div>
      <section id='bg'>
           <button id='lbtn' onClick={changePage}>Get started</button>
      </section>
      <section>
        <div>
          <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/264810938/original/e4ec2618e817566ea96aad4dc6a6ef6b56ae0e45/be-your-front-end-web-developer-react-js.png" alt="" />
        </div>
        <div>
          <img src={ReactImg} alt="" />
        </div>
      </section>
    </div>

  )
}

export default LandingPage
