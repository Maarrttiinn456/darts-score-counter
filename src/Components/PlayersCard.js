import { useState, useContext } from 'react';
import {setDoc,doc, deleteDoc} from "firebase/firestore";
import { DataToPassThrough } from '../DataToPassThrough';

//Icons
import { XMarkIcon,ArrowSmallRightIcon,ArrowSmallLeftIcon, ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

//slidershow
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

//components
import Button from '../Components/Button'
import InputField from './InputField';



const PlayersCard = () => {
    //Get data from DataToPassThrough
    const {usersData,usersCollection} = useContext(DataToPassThrough)

    //show inputs to add User
    const [showInputs, setShowInputs] = useState(false)

    //forms
    const [formName, setFormName] = useState('')
    const [formSurname, setFormSurname] = useState('')

    const [errorMessages, setErrorMessages] = useState([])
    

    //Add user
    const addUser = (e) => {
        e.preventDefault()
        if (formName !== '' && formSurname !== '')
        {
        const newUser = {
            name: formName,
            surname: formSurname,
            totalGames: 0,
            totalScore: 0,
            averagePointsToLeague: 0,
            averageWinsToLeague: 0,
            winners: 0,
        }
        const addUser = doc(usersCollection)
        setDoc(addUser, newUser)
        setFormName('')
        setFormSurname('')
        }
        else{
            setErrorMessages('Vypňte název ligy')
        }
        
        setShowInputs(!showInputs)
    }

    //Delete user
    const deleteUser = (id) => {
        const confrimDelete = window.confirm('Opravdu si přejete smazat uživatele? Všechna data uživatele budou ztracena!')
        if(confrimDelete)
        {
            const deleteUSer = doc(usersCollection,id)
            deleteDoc(deleteUSer)
        }
        
    }

    //SliderShow
    const properties = {
        prevArrow: <button className='ml-4 w-6'><ArrowSmallLeftIcon className='text-primary-200'/></button>,
        nextArrow: <button className='mr-4 w-6'><ArrowSmallRightIcon className='text-primary-200'/></button>,
    }

    return (
    <div>
        {usersData.length > 1 && (
            <Fade {...properties}>
                {usersData.map((user) => {
                    return(
                        <div key={user.id} className="bg-gradient-from-t bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-xl px-4 py-3">
                            <div className='flex justify-between items-center pl-10'>
                                <div className="text-2xl font-medium">{user.name} {user.surname}</div>
                                <div onClick={() => deleteUser(user.id)}><XMarkIcon className='h-6 text-primary-300' /></div>
                            </div>
                            <div className='mt-2 flex flex-col gap-0.5  pl-10'>
                                <div className='text-primary-200'>Odehrané ligy: <span className='text-white'>{user.totalGames}</span></div>
                                <div className='text-primary-200'>Body: <span className='text-white'>{ user.totalScore}</span></div>
                                <div className='text-primary-200'>Body/ligu: <span className='text-white'>{user.averagePointsToLeague} </span></div>
                                <div className='text-primary-200'>Počet výher: <span className='text-white'>{ user.winners}</span></div>
                            </div>
                        </div>
                    )
                })}
            </Fade>
        )}

        {usersData.length === 1 && (
            usersData.map((user) => {
                return(
                    <div key={user.id} className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl px-4 py-3 ">
                        <div className='flex justify-between items-center pl-10'>
                            <div className="text-2xl font-medium">{user.name} {user.surname}</div>
                            <div onClick={() => deleteUser(user.id)}><XMarkIcon className='h-6 text-primary-300' /></div>
                        </div>
                        <div className='mt-2 flex flex-col gap-0.5  pl-10'>
                            <div className='text-primary-200'>Odehrané ligy: <span className='text-white'>{user.totalGames}</span></div>
                            <div className='text-primary-200'>Body: <span className='text-white'>{ user.totalScore}</span></div>
                            <div className='text-primary-200'>Body/ligu: <span className='text-white'>{user.averagePointsToLeague} </span></div>
                            <div className='text-primary-200'>Počet výher: <span className='text-white'>{ user.winners}</span></div>
                        </div>
                    </div>
                )
            })
        )}

        
        <div className='mt-6 flex justify-center '>
            <div className={`${showInputs ? 'hidden' : 'block'}`}>
                <Button text='Přidat uživatele' outline='true' onClick={() => [setShowInputs(!showInputs), setErrorMessages('')]}/>
            </div>
            <div className={`${showInputs ? 'block' : 'hidden'}`}>
                <Button text='Přidat' bgColor='primary' textColor='white' onClick={addUser}/>
            </div>
        </div>

        <div className='text-center mt-4 text-red-600'>{errorMessages}</div>

        <div className={`mt-4 w-72 mx-auto ${showInputs ? 'block' : 'hidden'}`}>
            <div className='flex flex-col gap-2'>
                <InputField placeholder='Jméno' value={formName} onChange={(e) => setFormName(e.target.value)}/>
                <InputField placeholder='Příjmení' value={formSurname} onChange={(e) => setFormSurname(e.target.value)}/>
            </div>
            <div className='flex justify-center mt-4'>
                <div className='text-primary-900 font-semibold' onClick={() => setShowInputs(!showInputs)}><ArrowUturnLeftIcon className='h-5'/></div>
            </div>
        </div>
    </div>
  )
}

export default PlayersCard