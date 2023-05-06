import {Routes,Route} from "react-router-dom"
import Inspiration from "./Inspiration"
import Work from "./Work"
import Learn from "./Learn"
import GoPro from "./GoPro"
import Hire from "./Hire"
import Home from "./Home"
import Signup from "./Signup"

function Allroute(){

return (
    <div >
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/inspiration" element={<Inspiration/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="learn" element={<Learn/>}/>
            <Route path="go" element={<GoPro/>}/>
            <Route path="hire" element={<Hire/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
)
}
export default Allroute 