import styles from "./loggedHome.module.css"
import { useState,useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import image from "../dribble-footer.png"





function LogHome(){
    let [data,SetData]=useState([])
    let [loading,Setloading]=useState(false)
    let [heartColor,SetColor]=useState("black")
    let [liked,Setliked]=useState([])

    let Like=JSON.parse(localStorage.getItem("like"))||[]


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
            Setliked(data)
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

    let HandleChange=()=>{
        if(heartColor==="black"){
            SetColor("red")
        }
        else{
            SetColor("black")
        }


    }



let index=0


    return (
        <div>
        
        <div>
            <div className={styles.select}>
               <select >
                <option value="">Popular</option>
                <option value="">New & Noteworthy</option>
                <option value="">Marketplace</option>
               </select>
            </div>
        <div className={styles.card}>
            
               
        {data.length > 0 ? (
            
         data.slice(0,27).map((ele) => (
          <div key={ele.id} className={styles.like}>
           <img src={ele.images} alt="" />
           {
            
           }
           <div className={styles.content}>
            <div className={styles.svg} >
                
                <div style={{marginBottom:"20px",position:"relative",left:"60px",top:"85px"}}>
                <button  style={{background:"white",border:"none",borderRadius:"0.5em",cursor:"pointer"}} >
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" height="25px" fill="black" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
                </button>
                </div>
                <div style={{marginBottom:"20px",position:"relative",left:"112px",top:"35px"}}>
                <button onClick={HandleChange} style={{background:"white",border:"none",borderRadius:"0.5em",cursor:"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" height="25px" fill={heartColor} class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>
                </button>
                </div>
            </div>
            
           </div>
           <div style={{display:"flex"}}>
            <div>
            <button style={{border:"none",background:"white",cursor:"pointer"}}>
           <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" height="20px" fill="grey" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

           </button>
           </div>
           <div>
            {/* {index} */}
           </div>
           
           </div>
          </div>
        ))
         ) : (
    <h2>No data available</h2>
  )}
            </div>

            {/* <-------------footer-----------------> */}
           
            <footer className={styles.footer}>
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
               
            </footer>
            <div style={{backgroundColor: "#FAFAFB"}} className={styles.end}>
                <hr />
                <p>© 2023 Dribbble. All rights reserved.</p>

            </div>
            </div>
        </div>
    )
}
export default LogHome