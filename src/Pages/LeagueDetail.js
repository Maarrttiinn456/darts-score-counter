import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

import Button from '../Components/Button'

const LeagueDetail = () => {
  return (
      <div>
        <div className='flex justify-between mb-8'>
            <Button text="Vyhodnotit ligu" isOutline={true} />
            <Button text="Smazat ligu" isOutline={true}/>  
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl px-4 py-4 mb-6">
            <div className='flex justify-between items-start'>
                <div className='text-primary-200 text-xl'>Josef Salátek</div>
                <div> <Button text={ <PlusIcon className='h-6'/>} isOutline={true} isIcon={true}/> </div>
            </div>
            <div className='font-semibold text-8xl text-center py-4'>1</div>
            <div className='flex justify-end'>
                <div> <Button text={ <MinusIcon className='h-6'/>} isOutline={true} isIcon={true}/> </div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl px-4 py-4 mb-6">
            <div className='flex justify-between items-start'>
                <div className='text-primary-200 text-xl'>Martin Schuster</div>
                <div> <Button text={ <PlusIcon className='h-6'/>} isOutline={true} isIcon={true}/> </div>
            </div>
            <div className='font-semibold text-8xl text-center py-4'>1</div>
            <div className='flex justify-end'>
                <div> <Button text={ <MinusIcon className='h-6'/>} isOutline={true} isIcon={true}/> </div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl px-4 py-4 mb-6">
            <div className='flex justify-between items-start'>
                <div className='text-primary-200 text-xl'>Martin Schuster</div>
                <div> <Button text={ <PlusIcon className='h-6'/>} isOutline={true} isIcon={true}/> </div>
            </div>
            <div className='font-semibold text-8xl text-center py-4'>1</div>
            <div className='flex justify-end'>
                <div> <Button text={ <MinusIcon className='h-6'/>} isOutline={true} isIcon={true}/> </div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl px-4 py-4 mb-6">
            <div className='flex justify-between items-start'>
                <div className='text-primary-200 text-xl'>Martin Schuster</div>
                <div> <Button text={ <PlusIcon className='h-6'/>} isOutline={true} isIcon={true}/> </div>
            </div>
            <div className='font-semibold text-8xl text-center py-4'>1</div>
            <div className='flex justify-end'>
                <div> <Button text={ <MinusIcon className='h-6'/>} isOutline={true} isIcon={true}/> </div>
            </div>
        </div>
    </div>
  )
}

export default LeagueDetail