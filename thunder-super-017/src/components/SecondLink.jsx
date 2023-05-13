import { Link } from "react-router-dom"
import finalImage from "../dribble.png";
import styles from "./SecondLink.module.css"
import { AuthContext } from "../pages/Authcontext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";


let data=JSON.parse(localStorage.getItem("item"))||[];

function SecondLink(){
    // let {logout}=useContext(AuthContext)

// let Handleout=()=>{
//     logout()
//     return <Navigate to="/"/>
// }

    return (
        <div style={{display:"flex", justifyContent:'space-around'}}>
        <div style={{display:"flex", justifyContent:'space-around',width:"600px"}}>
           <Link to="/dribble" style={{textDecoration:"none",marginTop:"13px"}} >
           <img src={finalImage} alt="logo" style={{width:"80px"}}/>
           
           </Link>
            <Link to="/inspirations" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif',color:"#6e6d7a" }} className={styles.first}>
               <div style={{marginTop:"0px",marginRight:"5px", position: "relative",display: "inline-block"}} className={styles.mainbox1}>
               Inspiration
                   
                    <div className={styles.dropmenu}>
                        <div className={styles.box1} >
                            <h5 style={{marginTop:"20px",marginLeft:"35px"}}>Explore Design Work</h5>
                            <p style={{marginLeft:"35px"}}>Trending designs to inspire you</p>
                            <div className={styles.box1} style={{marginTop:"18px",marginLeft:"35px"}}>
                            <h5>New & Noteworthy</h5>
                            <p>Up-and-coming designers</p>
                        </div>
                        <div className={styles.box1} style={{marginTop:"18px",marginLeft:"35px"}}>
                            <h5>Playoffs</h5>
                            <p>Work designers are riffing on</p>
                        </div>
                        <div className={styles.box1} style={{marginTop:"18px",marginLeft:"35px"}}>
                            <h5>Blog</h5>
                            <p>Interviews,tutorials and more</p>
                        </div>
                        <div style={{position:"absolute",left:"310px",top:"1px",height:"377px",width:"191px"}} className={styles.browse}>
                            <h5 style={{fontSize: "15px",marginLeft:"30px",marginTop:"40px"}}>Browse Categories</h5>
                           <div><p style={{fontSize: "15px",marginLeft:"30px"}}>Animation</p></div>
                           <div><p style={{fontSize: "15px",marginLeft:"30px"}}>Branding</p></div>
                           <div><p style={{fontSize: "15px",marginLeft:"30px"}}>Illustration</p></div>
                           <div><p style={{fontSize: "15px",marginLeft:"30px"}}>Mobile</p></div>
                           <div><p style={{fontSize: "15px",marginLeft:"30px"}}>Print</p></div>
                           <div><p style={{fontSize: "15px",marginLeft:"30px"}}>Product Design</p></div>
                           <div><p style={{fontSize: "15px",marginLeft:"30px"}}>Typography</p></div>
                           <div><p style={{fontSize: "15px",marginLeft:"30px"}}>Web Design</p></div>
                        </div>
                        </div>
                        
                    </div>
                    
                </div> 
            
            </Link>
            <Link to="/works" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif' ,color:"#6e6d7a"}}>Find Work</Link>
            <Link to="/learn" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif',color:"#6e6d7a" }}>Learn Design</Link>
            <Link to="/go" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif' ,color:"#6e6d7a"}}>Go Pro</Link>
            <Link to="/hire" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif' ,color:"#6e6d7a"}}>Hire Designers</Link>
            </div>
            <div style={{marginLeft: '470px',display:"flex",justifyContent:"space-around"}}>
            
            <div className={styles.search}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&usqp=CAU" alt="" />
            <input type="search"  placeholder="Search..."/>
        </div>
           
            <div className={styles.user}>
                
                <div style={{marginTop:"0px",marginRight:"0px", position: "relative",display: "inline-block"}} className={styles.mainbox1}>
                <img src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg" alt="" />
               
                <div className={styles.dropmenu}>
                    <div className={styles.box1} style={{height:"340px",width:"230px",position:"absolute",top:"6px"}}>
                     <div>
                       
                       {data.map((ele)=>(
                           <h5 style={{marginTop:"18px",marginLeft:"35px",color:"rgb(85, 82, 82)",fontSize:"15px"}}>{ele.username}</h5>
                       ))}
                      </div>
                        <h5 style={{marginTop:"18px",marginLeft:"35px",color:"rgb(85, 82, 82)",fontSize:"15px"}} >Profile</h5>
                        <div style={{marginLeft:"11px"}}><hr style={{color:"grey",width:"180px"}}/></div>
                      
                        <div className={styles.box1} style={{marginTop:"18px",marginLeft:"35px"}}>
                        <h5 style={{color:"rgb(85, 82, 82)",fontSize:"15px"}}>Edit Profile</h5>
                        <br/>
                        <h5 style={{color:"rgb(85, 82, 82)",fontSize:"15px"}}>Edit Work Preferences</h5>
                        <div style={{marginRight:"24px"}}><hr style={{color:"grey",width:"180px"}}/></div>
                    </div>
                    <div className={styles.box1} style={{marginTop:"15px",marginLeft:"35px"}}>
                        <h5 style={{color:"rgb(85, 82, 82)",fontSize:"15px"}}>My Boosted Shots</h5>  
                        <br/>
                        <h5 style={{color:"rgb(85, 82, 82)",fontSize:"15px"}}><Link to="/likes" style={{textDecoration:"none",color:"rgb(85, 82, 82)"}}>My Likes</Link></h5>
                       
                    </div>
                    <div className={styles.box1} style={{marginTop:"18px",marginLeft:"35px"}}>
                        <h5 style={{color:"rgb(85, 82, 82)",fontSize:"15px"}}>My Collections</h5>
                        
                    </div>
                   
                    </div>
                    
                </div>
                
            </div> 
            </div>
            <Link to="/">
            <button style={{marginRight:"5px",marginTop:"20px",backgroundColor: '#ea4c89',color:"white",border:"none",height:"2.7vw",width:"5.5vw",borderRadius:"0.5em",cursor:"pointer"}} >Sign out</button>
            </Link>
            </div>
    </div>
    )
    }
    export default SecondLink