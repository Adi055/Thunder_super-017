import styles from "./Home.module.css"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import image from "../dribble-footer.png"



function Home(){
    let [data,SetData]=useState([])
    let [loading,Setloading]=useState(false)
    let FetchData=()=>{
        Setloading(true)
        let url=`https://api.escuelajs.co/api/v1/products`
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            SetData(data)
            console.log(data);
            Setloading(false)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        FetchData()
    },[])
    if(loading){
        return <h2 style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}>Loading..</h2>
    }

    return (
        <div>
            <video style={{marginTop:"15px"}} className={styles.video} autoPlay loop muted>
        <source src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" type="video/mp4" />
        </video>
        <div className={styles.front}>
            <button style={{background:"white",color:"black"}}> Discover</button>
            <button>Animation</button>
            <button>Branding</button>
            <button style={{height:"4vw",width:"8vw"}}>Illustration</button>
            <button>Mobile</button>
            <button>Print</button>
            <button >Product Design</button>
            <button>Typography</button>
            <button>Web Design</button>
        </div>
        <div className={styles.text}>
            <h1>Explore the world's leading <br/> design portfolios</h1>
        </div>
        <div className={styles.para}>
            <h2>Millions of designers and agencies around the world showcase their portfolio work <br/> on Dribbble - the home to the world's best design and creative professionals.</h2>
        </div>
        <div className={styles.search}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&usqp=CAU" alt="" />
            <input type="search"  placeholder="Search..."/>
        </div>
        <div className={styles.bottom}>
            <button style={{backgroundColor:"transparent",border:"none",color:"white"}}>Tending searches</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2.5vw",width:"8vw",marginRight:"12px",borderRadius:"50px",border:"1px solid white"}}>landing page</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2vw",width:"4vw",marginRight:"12px",borderRadius:"50px",border:"1px solid white",marginTop:"3px"}}>ios</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2vw",width:"4vw",marginRight:"12px",borderRadius:"50px",border:"1px solid white",marginTop:"3px"}}>food</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2.5vw",width:"8vw",marginRight:"12px",borderRadius:"50px",border:"1px solid white"}}>landingpage</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2.5vw",width:"8vw",marginRight:"12px",borderRadius:"50px",border:"1px solid white"}}>uxdesign</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2.5vw",width:"8vw",marginRight:"12px",borderRadius:"50px",border:"1px solid white"}}>app design</button>
        </div>
        <div>
            <div className={styles.select}>
               <select name="" id="">
                <option value="">Popular</option>
                <option value="">New & Noteworthy</option>
                <option value="">Marketplace</option>
               </select>
            </div>
        <div className={styles.card}>
            
               
        {data.length > 0 ? (
            
         data.slice(0,27).map((ele) => (
          <div key={ele.id} >
           <img src={ele.images} alt="" />
          </div>
        ))
         ) : (
    <h2>No data available</h2>
  )}
            </div>
            <div className={styles.lstbtn}>
            <Link to="/signup" >
        <button style={{marginRight:"5px",marginTop:"20px",backgroundColor: '#ea4c89',color:"white",border:"none",height:"2.7vw",width:"15vw",borderRadius:"0.5em",cursor:"pointer"}}>Sign up to continue</button>
        </Link>
        <Link to="/signin" >
            <button  style={{marginRight:"15px",marginTop:"25px",border:"none",fontSize:"16px", backgroundColor: 'white',color:"#ea4c89",cursor:"pointer",marginLeft:"20px"}}> or Sign in</button>
        </Link>
            </div>
            <div className={styles.footer}>
               <div style={{marginTop:"50px"}}> 
                    <img src={image} alt="" style={{width:'100px'}}/>
                    <p>Dribbble is the world's <br/> leading community for <br/> creatives to share, grow,<br/>  and get hired.</p>
                    <div className={styles.setimg}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="" style={{width:"30px"}}/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsP3M5Wl0XS9xnV8z1sLVtJCylnMqlBjuB6DxMT22n&s" alt="" style={{width:'25px'}}/>
                        <img src="https://cdn-icons-png.flaticon.com/512/4701/4701482.png" alt="" />
                        <img src="https://i.pinimg.com/originals/02/77/12/027712250a632b2e6f63c5466b792494.png" alt="" style={{width:"25px"}}/>
                    </div>
               </div>
               <div className={styles.link1}>
                <p style={{color:"black"}}>For Designers</p>
                <div className={styles.links}>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}} className={styles.fixed}>Go Pro!</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Explore design work</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Design blog</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Overtime podcast</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Playoffs</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Code of conduct</Link>
                </div>
               </div>
               <div className={styles.link2}>
               <p style={{color:"black"}}>Hire Designers</p>
               <div className={styles.links}>
               
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Post a job opening</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Post a freelance <br/>project</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Search for designers</Link>
                <p>Brands</p>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Advertise with us</Link>
                </div>
               </div>
               <div className={styles.link3}>
               <p style={{color:"black"}}>Company</p>
               <div className={styles.links}>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}} className={styles.fixed}>About</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Careers</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Support</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Media kit</Link>
                
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Testimonials</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>API</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Terms of service</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Privacy Policy</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Cookie Policy</Link>
                </div>
               </div>
               <div className={styles.link4}>
               <p style={{color:"black"}}>Directories</p>
               <div className={styles.links}>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}} className={styles.fixed}>Design jobs</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Designers for hire</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Freelance designers<br/> for hire</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Tags</Link>
                
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Places</Link>
                <p>Design Assets</p>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Dribbble Marketplace</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Creative Market</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Fontspring</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Font Squirrel</Link>
                </div>
               </div>
               <div className={styles.link5}>
               <p style={{color:"black"}}>Design Resources</p>
               <div className={styles.links}>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}} className={styles.fixed}>Freelancing</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Design Hiring</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Design Portfolio</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Media kit</Link>
                
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Design Education</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Creative Process</Link>
                <Link style={{display:"block",textDecoration:"none",color:"black",marginTop:"10px"}}>Design Industry <br/> Trends</Link>
                
                </div>
               </div>
               
            </div>
            <div style={{backgroundColor: "#FAFAFB"}} className={styles.end}>
                <hr />
                <p>© 2023 Dribbble. All rights reserved.</p>

            </div>
            </div>
        </div>
    )
}
export default Home