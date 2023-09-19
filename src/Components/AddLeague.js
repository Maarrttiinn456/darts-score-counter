import { useState } from 'react'
import {setDoc,doc} from "firebase/firestore";

//Icons
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

//components
import Button from '../Components/Button'
import InputField from './InputField'

const AddLeague = ({leaguesData,leaguesCollection, usersData}) => {

    const [formLeague, setFormLeague] = useState('')
    const [checkedValuesUsers, setCheckedValuesUsers] = useState([]);

    const [showInputs, setShowInputs] = useState(false)


    const handleCheckedUsers = (e) => {
        if (e.target.checked) {
            setCheckedValuesUsers([...checkedValuesUsers, {chekedUserId: e.target.value, userLeagueScore: 0}]);
        } else {
            setCheckedValuesUsers(checkedValuesUsers.filter((id) => id !== e.target.value));
        }
    };

    const addUsersToLeague = (e) => {
        e.preventDefault()

        if (formLeague !== '')
        {
            const newLeague = {
            name: formLeague,
            users: checkedValuesUsers
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

        setShowInputs(!showInputs)
    }

    console.log(leaguesData);

    return (
        <>
            <div className='flex flex-col items-center'>
                <div className={`${showInputs ? 'hidden' : 'block'}`}>
                    <Button text='Založit ligu' outline='true'  onClick={() => setShowInputs(!showInputs)}/>
                </div>
                <div className={`${showInputs ? 'block' : 'hidden'}`}>
                    <Button text='Založit' bgColor='primary' textColor='white' onClick={addUsersToLeague}/>
                </div>
            </div>

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
                                <label className=' flex items-center text-primary-900'>
                                    <input type="checkbox" name={user.id} value={user.id} onChange={handleCheckedUsers} className='users-inputs mr-2 h-4 w-4 cursor-pointer rounded border border-primary-600 bg-white ring-offset-0 transition checked:border-primary-800 checked:bg-primary-500 hover:border-primary-800 hover:bg-primary-100 focus:border-primary-600 focus:ring-0 focus:ring-primary-200' />
                                    {user.name} { user.surname}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div className='mt-2 flex justify-center'>
                    
                </div>
            </div>
      </>
    
  )
}

export default AddLeague