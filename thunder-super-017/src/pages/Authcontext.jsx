import React,{ createContext, useState } from "react"

export let AuthContext=createContext()

function AuthContextProvider({children}){
let [isAuth,Setauth]=useState(false)

let login=()=>{
    Setauth(true)
}

let logout=()=>{
    Setauth(false)
}


return (
    <div>
        <AuthContext.Provider value={{isAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    </div>
)


}
export default AuthContextProvider