import {useState, useEffect} from 'react'


//Icons
import { UserIcon } from '@heroicons/react/24/solid'

//Components
import PlayersCard from '../Components/PlayersCard'
import LeagesList from '../Components/LeagesList'

//db
import { collection, onSnapshot } from "firebase/firestore";
import db from '../firebase/config'

//collection
const usersCollection = collection(db, 'users')
const leaguesCollection = collection(db, 'leagues')

const Homepage = () => {

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
  
  return (
    <div>
      <div className='flex justify-between items-start mb-6'>
        <div className='flex items-center gap-2'>
          <UserIcon className='text-primary-900 w-5'/>
          <div className='text-primary-900 font-medium'>josef@salatek.cz</div>  
        </div>
        <div className='underline text-primary-900 underline-offset-2 text-sm font-medium'>
          Odhlásit se
        </div>
      </div>
      <PlayersCard usersData={usersData} usersCollection={usersCollection}/>
        <div className='border-b border-primary-200 my-10'></div>
      <LeagesList leaguesData={leaguesData} leaguesCollection={leaguesCollection} usersData={usersData}/>
    </div>
  )
}

export default Homepage