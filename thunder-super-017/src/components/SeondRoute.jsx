import LogHome from "./loggedHome"
import Inspiration from "./Inspiration"
import Work from "./Work"
import Learn from "./Learn"
import GoPro from "./GoPro"
import Hire from "./Hire"
import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import AllLink from "./Link"
import Signin from "./Signin"
import Signup from "./Signup"
import SecondLink from "./SecondLink"
import Likes from "./likes"

let Action=()=>{
    return(
        <div>
            <AllLink/>
            <Home/>
        </div>
    )
}


let Action1=()=>{
    return(
        <div>
            <AllLink/>
            <Signin/>
        </div>
    )
}

let Action2=()=>{
    return(
        <div>
            <AllLink/>
            <Signup/>
        </div>
    )
}

let Action4=()=>{
    return(
        <div>
            
            <SecondLink/>
            
            <LogHome/>

        </div>
    )
}

let Get=()=>{
    return <div>
        <SecondLink/>
        <Work/>
    </div>
}




let Action5=()=>{
    return (
        <div>
            <SecondLink/>
           
            <Inspiration/>
        </div>
    )
}

let Action6=()=>{
    return (
        <div>
             <SecondLink/>
                <Likes/>
        </div>
    )
}

function SecondRoute(){

    return (
        <div >
            <Routes>
                <Route path="/inspirations" element={<Action5/>}/>
                <Route path="/works" element={<Get/>}/>
                <Route path="learn" element={<Learn/>}/>
                <Route path="go" element={<GoPro/>}/>
                <Route path="hire" element={<Hire/>}/>
               <Route path="/dribble" element={<Action4/>}/>
               <Route path="/" element={<Action/>}/>
               <Route path="/signin" element={<Action1/>}/>
               <Route path="/signup" element={<Action2/>}/>
               <Route path="/likes" element={<Action6/>}/>
            </Routes>
        </div>
    )
    }
export default SecondRoute