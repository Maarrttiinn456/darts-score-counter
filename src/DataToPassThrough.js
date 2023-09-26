import {createContext ,useState, useEffect} from 'react'

//db 
import { collection, onSnapshot } from "firebase/firestore";
import db from './firebase/config'

//collection
const usersCollection = collection(db, 'users')
const leaguesCollection = collection(db, 'leagues')

const DataToPassThrough = createContext()


function MyProvider ({children}) {
    const [usersData, setUsersData] = useState([])
    const [leaguesData, setLeaguesData] = useState([])
    

    useEffect(() => {
        const getDataUsers = onSnapshot(usersCollection, (usersCollection) => {
          const getUsers = usersCollection.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
          })
          setUsersData(getUsers)
        })
    
        const getDataLeagues = onSnapshot(leaguesCollection, (leaguesCollection) => {
          const getLeagues = leaguesCollection.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
          })
          setLeaguesData(getLeagues)
        })
    
        return () => {
          getDataUsers()
          getDataLeagues()
        }
    }, []) 

    return(
        <DataToPassThrough.Provider value={{usersData,setUsersData,leaguesData,setLeaguesData,usersCollection,leaguesCollection}}>
            {children}
        </DataToPassThrough.Provider>
    )
}


export {DataToPassThrough, MyProvider }