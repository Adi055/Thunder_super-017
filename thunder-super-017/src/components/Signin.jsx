import styles from "./Signin.module.css"
import { Link,Navigate } from "react-router-dom"
import Sign from "../dribble-sinin2.png"
import { useState } from "react"


let data=JSON.parse(localStorage.getItem("item"))||[];

function Signin(){

    
console.log(data);

    let [email,Setemail]=useState("");
    let [password,Setpassword]=useState("");
    let [error,Seterror]=useState(false)
    let [valid,Setvalid]=useState(false)


    let HandleSubmit=(e)=>{
        e.preventDefault()
        if(email==="" ||password===""){
            Setvalid(true)
            return
        }
      let user=data.find((item)=>item.email==email && item.password==password)
        
      
      console.log(data);
        if(user){
          
                alert('Your account has been created')
              
       
       
        }
        else if(!user){
            Seterror(true)
            return
        }

    Setemail("");
    Setpassword("");

    }
 
    return (
        <div>
           
           <div className={styles.first}>
            <div className={styles.dribble}>
                <div>
               <Link to="/"> <img src={Sign} alt="" style={{ width: "100px"
       }}/></Link>
                <h1>Discover the world’s top <br/> Designers & Creatives.</h1>
                </div>
            </div>
            <div className={styles.second}>
            <div className={styles.member}>
                <p>Not a member? 
                    <Link to="/signup" style={{textDecoration:"none"}}>Sign up now</Link>
                </p>
            </div>
                <h2>Sign in to Dribbble</h2>
                <div >
                <button>
                <img
                
                style={{ marginBottom: "3px", marginRight: "5px",width:"20px" }}
                alt="Google login"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                />
                <Link to="https://accounts.google.com/gsi/select?client_id=32073492121-s6ur8ti01mh34gq2bpbufb8ujdfrpn4v.apps.googleusercontent.com&ux_mode=redirect&login_uri=https%3A%2F%2Fdribbble.com%2Fauth%2Fgoogle_one_tap_signup%2Fcallback&ui_mode=card&as=2tsrpW4GSHXp6eBxGvOLRg&g_csrf_token=37dc3303dc6b5fe" style={{ position: "relative",
      bottom: "6px",
      left: "8px",textDecoration:"none",color:"white"}}>
               <span>Sign in with google</span>
               </Link>
                </button>
                </div>
                <div className={styles.hr}>
                   <hr />
                   <span>or</span>
                   <div>
                   <hr className={styles.hr2}/>
                   </div>
                </div>
                {error && <p style={{color:"red"}}>Email or Password is invalid</p>}
                {valid && <p style={{color:"red"}}>Please fill out all the details</p>}
                <form action="">
                
                <div className={styles.email}>
                <label htmlFor="">Username or Email Address</label>
                <div>
                <input type="email"  required="@kjnjk" value={email} onChange={(e)=>Setemail(e.target.value)}/>
                </div>
                </div>
                <div className={styles.password}>
                <label htmlFor="">Password</label>
                <div>
                <input type="password"  required="@" placeholder="6+ characters" value={password} onChange={(e)=>Setpassword(e.target.value)}/>
                </div>
                </div>
                <div className={styles.button}>
                   <button onClick={HandleSubmit}><Link to="/dribble" style={{textDecoration:"none",color:"white"}}>Sign in</Link></button>
                </div>
                </form>
            </div>
           </div>
        </div>
    )
}
export default Signin