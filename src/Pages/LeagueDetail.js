import { ArrowSmallLeftIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom'

//Components
import Button from '../Components/Button'
import { useParams } from 'react-router-dom'

const LeagueDetail = () => {
    
    const {id} = useParams()

    return (
        <div>
        <Link to='/' className='text-primary-900'><ArrowSmallLeftIcon className='h-8 text-primary-900'/></Link>
        <div className='mb-10 text-center'>
            <div className='text-4xl text-primary-900 pt-3'>{id}</div>
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl px-4 py-4 mb-6">
            <div className='flex justify-between items-start'>
                <div className='text-primary-200 text-xl'>Josef Salátek</div>
                <div> <Button size="small" text={<PlusIcon className='h-6 text-primary-600'/>} white='true'/> </div>
            </div>
            <div className='font-semibold text-8xl text-center py-4'>1</div>
            <div className='flex justify-end'>
                <div>  <Button size="small" text={<MinusIcon className='h-6 text-primary-600'/>} white='true'/>  </div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-8'>
            <Button outline='true' text='Vyhodnotit ligu'/>
            <div className='text-red-600 underline underline-offset-4'>Smazat ligu</div>
        </div>
    </div>
    )
}

export default LeagueDetail