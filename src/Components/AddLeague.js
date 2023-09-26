import { useState,useContext } from 'react'
import {setDoc,doc} from "firebase/firestore";
import { DataToPassThrough } from '../DataToPassThrough';

//Icons
import { ArrowSmallRightIcon,ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

//components
import Button from '../Components/Button'
import InputField from './InputField'

const AddLeague = () => {

    const {usersData,leaguesData,leaguesCollection} = useContext(DataToPassThrough)

    const [formLeague, setFormLeague] = useState('')
    const [checkedValuesUsers, setCheckedValuesUsers] = useState([]);

    const [showInputs, setShowInputs] = useState(false)

    const [errorMessages, setErrorMessages] = useState([])


    const handleCheckedUsers = (e) => {
        if (e.target.checked) {
            setCheckedValuesUsers([...checkedValuesUsers, {chekedUserId: e.target.value, userLeagueScore: 0,randomNumberToorder: Math.floor(Math.random() * 10000)}]);
        } else {
            setCheckedValuesUsers(checkedValuesUsers.filter((id) => id !== e.target.value));
        }
    };

    

    const addUsersToLeague = (e) => {
        e.preventDefault()
        const currentDate = new Date()
        const day = currentDate.getDate(); 
        const month = currentDate.getMonth() + 1; 
        const year = currentDate.getFullYear();

        const formatingDate = `${day}. ${month}. ${year}`

        if (formLeague !== '')
        {
            const newLeague = {
                name: formLeague,
                finished: false,
                timestamp: formatingDate,
                users: checkedValuesUsers,
            }

            const addLeague = doc(leaguesCollection)
            setDoc(addLeague, newLeague)
            setFormLeague('')
            setCheckedValuesUsers([])
            const inputs = document.querySelectorAll('.users-inputs')
            inputs.forEach((input) => {
                input.checked = false
            })
        }
        else{
            setErrorMessages('Vypňte název ligy')
        }

        setShowInputs(!showInputs)
    }


    return (
        <>
            <div className='flex flex-col items-center'>
                <div className={`${showInputs ? 'hidden' : 'block'}`}>
                    <Button text='Založit ligu' outline='true'  onClick={() => [setShowInputs(!showInputs), setErrorMessages('')]}/>
                </div>
                <div className={`${showInputs ? 'block' : 'hidden'}`}>
                    <Button text='Založit' bgColor='primary' textColor='white' onClick={addUsersToLeague}/>
                </div>
            </div>

            <div className='text-center mt-4 text-red-600'>{errorMessages}</div>

            <div className={`mt-4 w-72 mx-auto ${showInputs ? 'block' : 'hidden'}`}>
                <InputField
                    type='text'
                    placeholder="Název ligy"
                    value={formLeague}
                    onChange={(e) => setFormLeague(e.target.value)}
                />
                <div className='mt-2'>
                    <div className='flex flex-col gap-1'>
                        {usersData.map((user) => {
                            return (
                                <label key={user.id} className=' flex items-center text-primary-900'>
                                    <input type="checkbox" name={user.id} value={user.id} onChange={handleCheckedUsers} className='users-inputs mr-2 h-4 w-4 cursor-pointer rounded border border-primary-600 bg-white ring-offset-0 transition checked:border-primary-800 checked:bg-primary-500 hover:border-primary-800 hover:bg-primary-100 focus:border-primary-600 focus:ring-0 focus:ring-primary-200' />
                                    {user.name} { user.surname}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <div className='text-primary-900 font-semibold' onClick={() => setShowInputs(!showInputs)}><ArrowUturnLeftIcon className='h-5'/></div>
                </div>
            </div>
      </>
    
  )
}

export default AddLeague