 import { Link } from "react-router-dom"
import styles from "./Link.module.css"
import finalImage from "../dribble.png";



function AllLink(){

return (
    <div style={{display:"flex", justifyContent:'space-around'}}>
    <div style={{display:"flex", justifyContent:'space-around',width:"600px"}}>
       <Link to="/" style={{textDecoration:"none",marginTop:"13px"}}>
       <img src={finalImage} alt="logo" style={{width:"80px"}}/>
       </Link>
        <Link to="/inspiration" style={{textDecoration:"none",marginTop:"23px", fontFamily: '"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif',color:"#6e6d7a" }}>Inspiration</Link>
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
            <button className={styles.signin}  style={{marginRight:"15px",marginTop:"25px",border:"none",fontSize:"16px", backgroundColor: 'white',color:"#6e6d7a"}}>Sign in</button>
        </Link>
        <Link to="/signup" >
        <button style={{marginRight:"5px",marginTop:"20px",backgroundColor: '#ea4c89',color:"white",border:"none",height:"2.7vw",width:"5.5vw",borderRadius:"0.5em"}}>Sign up</button>
        </Link>
        </div>
</div>
)
}
export default AllLink