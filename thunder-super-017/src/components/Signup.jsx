import styles from "./Signup.module.css"
import Sign from "../dribble-signin.png"
import { Link } from "react-router-dom"

function Signup(){
return (
    <div>
       <div className={styles.first}>
        <div>
            <div>
           <Link to="/"> <img src={Sign} alt="" style={{ width: "100px"
   }}/></Link>
            <h1>Discover the world’s top <br/> Designers & Creatives.</h1>
            </div>
        </div>
        <div>

        </div>
       </div>
    </div>
)
}
export default Signup