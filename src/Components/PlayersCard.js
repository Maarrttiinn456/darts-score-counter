import { XMarkIcon } from '@heroicons/react/24/solid'

//components
import Button from '../Components/Button'

const PlayersCard = () => {
    return (
    <div>
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl px-4 py-3">
            <div className='flex justify-between items-center'>
                <div className="text-2xl font-medium">Josef Salátek</div>
                <div className='hidden'><XMarkIcon className='h-6 text-red-400' /></div>
            </div>
            <div className='mt-2 flex flex-col gap-0.5'>
                <div className='text-primary-200'>Odehrané ligy: <span className='text-white'>8</span></div>
                <div className='text-primary-200'>Body: <span className='text-white'>48</span></div>
                <div className='text-primary-200'>Body/ligu: <span className='text-white'>6</span></div>
                <div className='text-primary-200'>Počet výher: <span className='text-white'>1</span></div>
                <div className='text-primary-200'>Výher/ligu: <span className='text-white'>0,125</span></div>
            </div>
        </div>
        
        <div className='mt-6 flex justify-center'>
            <Button text='Přidat uživatele' outline='true'/>
        </div>
    </div>
    
  )
}

export default PlayersCard