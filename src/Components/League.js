import { useContext } from 'react'
import { ArrowSmallRightIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { DataToPassThrough } from '../DataToPassThrough'
import {doc,deleteDoc } from 'firebase/firestore';

import { Link } from 'react-router-dom'

const League = () => {

    const {usersData,leaguesData,leaguesCollection} = useContext(DataToPassThrough)


    const deleteLeague = (id) => {
        const deleteLeague = doc(leaguesCollection, id)
        deleteDoc(deleteLeague)
    }

    return (
    <>
        <div className='mt-12'>
            {leaguesData.map((league) => {
                if(league.finished !== true)
                {
                    return (
                        <Link to={`/league/${league.id}`}>
                            <div key={league.id} className='rounded-md shadow-sm border border-primary-200 mb-2 py-3 px-4 text-primary-900 font-medium bg-primary-100'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <div className='text-2xl'>{league.name}</div>
                                        <div className='text-xs my-1 flex items-center'>
                                            <CalendarDaysIcon className='h-3 text-primary-900 mr-1'/>
                                            {league.timestamp}
                                        </div>
                                        <div className='flex flex-wrap gap-x-2'>
                                            {league.users.map((user) => {
                                                return (
                                                    <div key={user.chekedUserId}>
                                                        {usersData.map((userData) => {
                                                            if (userData.id === user.chekedUserId) {
                                                            return (
                                                                <div key={userData.id}>
                                                                    <div className='text-xs font-normal text-primary-600 mt-0.5'>{userData.name} {userData.surname}</div>
                                                                </div>
                                                            )
                                                            }
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <ArrowSmallRightIcon className='h-8 text-primary-900 ml-0.5' />
                                </div>
                            </div>
                        </Link>
                    )
                }else{
                    league.users.sort((a, b) => {
                        return b.userLeagueScore - a.userLeagueScore;
                    });
                    return(
                        <div key={league.id} className='rounded-md shadow-sm mb-2 py-3 px-4 text-primary-900 font-medium bg-primary-50'>
                            <div className='flex justify-between items-start'>
                                <div>
                                    <div className='text-2xl'>Ukončeno</div>
                                    <div className='text-xs my-1 flex items-center'>
                                        <CalendarDaysIcon className='h-3 text-primary-900 mr-1'/>
                                        {league.timestamp}
                                    </div>
                                    <div className='flex flex-wrap gap-x-2'>
                                        {league.users.map((user,index) => {
                                            return (
                                                <div key={user.chekedUserId}>
                                                    {usersData.map((userData) => {
                                                        if (userData.id === user.chekedUserId) {
                                                            return (
                                                                <div key={userData.id}>
                                                                    <div className='text-xs font-normal text-primary-600 mt-0.5'>{index + 1}. {userData.name} {userData.surname}</div>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div onClick={() => deleteLeague(league.id)}>
                                    smazat
                                </div>
                            </div>
                        </div>
                    )
                }
            
            })}            
            
        </div>
    </>
    )
}

export default League