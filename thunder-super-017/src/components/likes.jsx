import styles from "./likes.module.css"
import { Link } from "react-router-dom"
import image from "../dribble-footer.png"


let Likes=()=>{

return <div>
    <div>
       
    </div>
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
}
export default Likes