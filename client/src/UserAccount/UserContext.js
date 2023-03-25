import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
// const cookieParser = require('cookie-parser')

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
const [ready,setReady] = useState(false);

// this useEffect will take some few milliseconds to run so the return will run first with the null value of user 
// so for this we define "ready" as useState

  useEffect(() => {
    // if (!user) {
        // }
        async function getUser(){
            try{
              const res = (await axios.get('/profile'))
              // console.log(res)
              setUser(res.data)
setReady(true);
            }catch(err){
              console.log(err)
            }
    }
    getUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser,ready }}>
      {children}
    </UserContext.Provider>
  )
}
