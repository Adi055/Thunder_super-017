import styles from "./Signup.module.css"
import Sign from "../dribble-signin.png"
import { Link } from "react-router-dom"
import { useState } from "react";

let initial={
    name:"",
    username:"",
    email:"",
    password:"",
}




function Signup(){
    let data=JSON.parse(localStorage.getItem("item"))||[];

let [inputval,Setinput]=useState(initial)
let [submit,Setsubmit]=useState([])
let [error,Seterror]=useState(false)
let [valid,Setvalid]=useState(false)
let [check,Setcheck]=useState(false)


let Checkduplicate=(newval)=>{
return submit.some(
    (item)=>item.email==newval.email || item.username==newval.username
)
}


   let HandleChange=(e)=>{
        Setinput({...inputval,[e.target.name]:e.target.value})
   }

   let HandleSubmit=(e)=>{
    e.preventDefault()
    if (inputval.name==="" || inputval.username==="" || inputval.email==="" || inputval.password==="") {
        Seterror(true);
        return;
    }
    if(inputval.password.length<6){
      Setcheck(true)
      return
    }
        let newval={
            name:inputval.name,
            username:inputval.username,
            email:inputval.email,
            password:inputval.password
        }

        if(Checkduplicate(newval)){
           Setvalid(true)
           return
        }
        
        else{
        console.log(newval);
        data.push(newval)
        localStorage.setItem("item",JSON.stringify(data))
        Setsubmit([...submit,newval])
        Setinput(initial)
        }

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
            <p>Already a member?
                <Link to="/signin" style={{textDecoration:"none"}}>Sign In</Link>
            </p>
        </div>
            <h2>Sign up to Dribble</h2>
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
           <span>Sign up with google</span>
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
            {error && <p style={{color:"red"}}>Please fill all the details </p>}
            {valid && <p style={{color:"red"}}>Username or Email already exist </p>}
            {check && <p style={{color:"red"}}>Password must be 6+ characters</p>}
            <form action="">
            <div className={styles.form}>
                
                <div>
                <label htmlFor="">Name</label>
            <input type="text" required="@" name="name" value={inputval.name} onChange={HandleChange}/>
            </div>
            
            <div>
            <label htmlFor="">Username</label>
            <input type="text" required="@" name="username" value={inputval.username} onChange={HandleChange}/>
            </div>
            
            </div>
            <div className={styles.email}>
            <label htmlFor="">Email</label>
            <div>
            <input type="email"  required="@kjnjk" name="email" value={inputval.email} onChange={HandleChange}/>
            </div>
            </div>
            <div className={styles.password}>
            <label htmlFor="">Password</label>
            <div>
            <input type="password"  required="@" placeholder="6+ characters" name="password" value={inputval.password} onChange={HandleChange}/>
            </div>
            </div>
            <div className={styles.button}>
               <button onClick={HandleSubmit}>Create Account</button>
            </div>
            </form>
            
        </div>
       </div>
    </div>
)
}
export default Signup