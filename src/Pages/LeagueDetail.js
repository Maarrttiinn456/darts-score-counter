import { useContext } from 'react';
import { updateDoc,doc,getDoc,deleteDoc } from 'firebase/firestore';
import { DataToPassThrough } from '../DataToPassThrough'

import { ArrowSmallLeftIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom'

//Components
import Button from '../Components/Button'
import { useParams,useNavigate } from 'react-router-dom'

const LeagueDetail = () => {

    const {usersData,leaguesData,leaguesCollection,usersCollection} = useContext(DataToPassThrough)
    const {id} = useParams()
    const navigate = useNavigate();

    //IncresePoints
    const incresePoints = (leagueId, userId) => {
        const docRef = doc(leaguesCollection, leagueId)
        getDoc(docRef).then((docSnap) => {
            const usersInLeague = docSnap.data().users
            usersInLeague.forEach((user) => {
            if (user.chekedUserId === userId)
            {
                const currentValue = user.userLeagueScore
                const updatedValue = currentValue + 1
                const updatedUsers = usersInLeague.filter((user) => user.chekedUserId !== userId)
                updatedUsers.push({chekedUserId: userId, userLeagueScore: updatedValue, randomNumberToorder: user.randomNumberToorder })
                updatedUsers.sort((a, b) => b.randomNumberToorder - a.randomNumberToorder)
                updateDoc(docRef, {users: updatedUsers})
            }
            })
        })
    }

    //decresePoints
    const decresePoints = (leagueId, userId) => {
        const docRef = doc(leaguesCollection, leagueId)
        getDoc(docRef).then((docSnap) => {
          const usersInLeague = docSnap.data().users
          usersInLeague.forEach((user) => {
            if (user.chekedUserId === userId)
            {
              const currentValue = user.userLeagueScore
              const updatedValue = currentValue - 1
              const updatedUsers = usersInLeague.filter((user) => user.chekedUserId !== userId)
              updatedUsers.push({ chekedUserId: userId, userLeagueScore: updatedValue, randomNumberToorder: user.randomNumberToorder})
              updatedUsers.sort((a, b) => b.randomNumberToorder - a.randomNumberToorder)
              updateDoc(docRef, {users: updatedUsers})
            }
          })
        })
    }

    const deleteLeague = (id) => {
        const deleteLeague = doc(leaguesCollection, id)
        deleteDoc(deleteLeague)
        navigate('/')
    }


    const countLeague = (id) => {
        const docRef = doc(leaguesCollection, id)
        getDoc(docRef).then((docSnap) => {
          const usersInLeague = docSnap.data().users
          usersInLeague.forEach((user) => {
            //tohle dělám pro každého uživatele v lize. Díky user.chekedUserId
            const docRefUser = doc(usersCollection, user.chekedUserId)
            getDoc(docRefUser).then((docSnapUser) => {
              const currentUser = docSnapUser.data()
              const currentUserTotalScore = currentUser.totalScore
              const currentUserTotalGames = currentUser.totalGames
              const currentUserWinners = currentUser.winners
              const currentUserUpdatedTotalScore = currentUserTotalScore + user.userLeagueScore
              const currentUserUpdatedTotalGames = currentUserTotalGames + 1
              const currentUserUpdatedAveragePointsToGames = (currentUserUpdatedTotalScore / currentUserUpdatedTotalGames).toFixed(1)
              let currentUserUpdatedWinners = currentUserWinners
              if (user.userLeagueScore === usersInLeague[0].userLeagueScore)
              {
                //console.log("user.userLeagueScore", user.userLeagueScore);
                //tohle je první v pořadí díky tomu že je řadím dle skóre ve funkci desresePoints
                //console.log("usersInLeague[0].userLeagueScore", usersInLeague[0].userLeagueScore);
                currentUserUpdatedWinners = currentUserWinners + 1
              }
              //const currentUserUpdatedAverageWinsToGames = (currentUserUpdatedWinners  / currentUserUpdatedTotalGames).toFixed(0) * 100
              updateDoc(docRefUser, {totalScore: currentUserUpdatedTotalScore, totalGames: currentUserUpdatedTotalGames, averagePointsToLeague: currentUserUpdatedAveragePointsToGames, winners: currentUserUpdatedWinners})
            })
          })

          updateDoc(docRef, {finished: true})
        })
        navigate('/')
    } 

    return (
        <div>
            <Link to='/' className='text-primary-900'>
                <ArrowSmallLeftIcon className='h-8 text-primary-900'/>
            </Link>
            {leaguesData.map((league) => {
                if(league.id === id)
                {
                    return (
                        <div key={league.id}>
                            <div className='mb-10 text-center'>
                                <div className='text-4xl text-primary-900 pt-3'>{league.name}</div>
                            </div>
                            <div>
                                {league.users.map((user) => {
                                    return (
                                        <div key={user.chekedUserId}>
                                            {usersData.map((userData) => {
                                                if (userData.id === user.chekedUserId) {
                                                return (
                                                    <div key={userData.id} className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl px-4 py-4 mb-6">
                                                        <div className='flex justify-between items-start'>
                                                            <div className='text-primary-200 text-xl'>{userData.name} {userData.surname}</div>
                                                            <div> 
                                                                <Button 
                                                                    size="small" 
                                                                    text={<PlusIcon className='h-6 text-primary-600'/>} 
                                                                    white='true' 
                                                                    onClick={() => incresePoints(league.id, user.chekedUserId)}
                                                                /> 
                                                            </div>
                                                        </div>
                                                        <div className='font-semibold text-8xl text-center py-4'>{user.userLeagueScore}</div>
                                                        <div className='flex justify-end'>
                                                            <div>  
                                                                <Button 
                                                                    size="small" 
                                                                    text={<MinusIcon className='h-6 text-primary-600'/>} 
                                                                    white='true'
                                                                    onClick={() => decresePoints(league.id, user.chekedUserId)}
                                                                />  
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )  
                                                }
                                            })}
                                        </div>
                                    )
                                })}
                                <div className='flex flex-col items-center gap-8'>
                                    <Button outline='true' text='Vyhodnotit ligu' onClick={() => countLeague(league.id)}/>
                                    <div className='text-red-600 underline underline-offset-4' onClick={() => deleteLeague(league.id)}>Smazat ligu</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default LeagueDetail