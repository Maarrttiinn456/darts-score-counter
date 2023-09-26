
//Icons
import { UserIcon } from '@heroicons/react/24/solid'

//Components
import PlayersCard from '../Components/PlayersCard'
import LeagesList from '../Components/LeagesList'


const Homepage = () => {
  return (
    <div>
      <div className='flex justify-between items-start mb-6 hidden'>
        <div className='flex items-center gap-2'>
          <UserIcon className='text-primary-900 w-5'/>
          <div className='text-primary-900 font-medium'>josef@salatek.cz</div>  
        </div>
        <div className='underline text-primary-900 underline-offset-2 text-sm font-medium'>
          Odhlásit se
        </div>
      </div>
      <PlayersCard/>
        <div className='border-b border-primary-200 my-10'></div>
      <LeagesList/>
    </div>
  )
}

export default Homepage