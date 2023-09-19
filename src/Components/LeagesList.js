import {useState} from 'react'

//components
import AddLeague from './AddLeague'
import League from './League'

const LeagesList = ({leaguesData,leaguesCollection,usersData}) => {
  return (
    <div>
        <AddLeague leaguesData={leaguesData} leaguesCollection={leaguesCollection} usersData={usersData}/> 
        <League leaguesData={leaguesData} usersData={usersData}/>
    </div>
  )
}

export default LeagesList