 import { Link } from "react-router-dom"
import styles from "./Link.module.css"
import finalImage from "../dribble.png";



function AllLink(){

return (
    <div style={{display:"flex", justifyContent:'space-around'}}>
    <div style={{display:"flex", justifyContent:'space-around',width:"600px"}}>
       <Link to="/" style={{textDecoration:"none",marginTop:"13px"}} >
       <img src={finalImage} alt="logo" style={{width:"80px"}}/>
       
       </Link>
        <Link to="/inspiration" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif',color:"#6e6d7a" }} className={styles.first}>
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
        <Link to="/work" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif' ,color:"#6e6d7a"}}>Find Work</Link>
        <Link to="/learn" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif',color:"#6e6d7a" }}>Learn Design</Link>
        <Link to="/go" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif' ,color:"#6e6d7a"}}>Go Pro</Link>
        <Link to="/hire" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif' ,color:"#6e6d7a"}}>Hire Designers</Link>
        </div>
        <div style={{marginLeft: '470px',display:"flex",justifyContent:"space-around"}}>
        
        <Link to='/search'>
         <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&usqp=CAU" alt="Logo" style={{backgroundColor:"white",backgroundColor:"6e6d7a"}}/>
        </Link>
       
        <Link to="/signin" >
            <button className={styles.signin}  style={{marginRight:"15px",marginTop:"25px",border:"none",fontSize:"16px", backgroundColor: 'white',color:"#6e6d7a",cursor:"pointer"}}>Sign in</button>
        </Link>
        <Link to="/signup" >
        <button style={{marginRight:"5px",marginTop:"20px",backgroundColor: '#ea4c89',color:"white",border:"none",height:"2.7vw",width:"5.5vw",borderRadius:"0.5em",cursor:"pointer"}}>Sign up</button>
        </Link>
        </div>
</div>
)
}

export default AllLink