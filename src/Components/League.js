import { ArrowSmallRightIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom'

const League = () => {

  return (
    <>
        <div className='mt-12'>
            <Link to="/league/Liga 2">
                <div className='rounded-md shadow-sm mb-1 py-3 px-4 text-primary-900 font-medium bg-primary-50'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <div className='text-2xl'>Liga 2</div>
                            <div className='text-xs my-1 flex items-center'><CalendarDaysIcon className='h-3 text-primary-900 mr-1'/>22.09.2023</div>
                                <div className='flex flex-wrap gap-x-2'>
                                <div className='text-xs font-normal text-primary-500 mt-0.5'>1. Josef Salátek</div>
                                <div className='text-xs font-normal text-primary-500 mt-0.5'>2. Josef Salátek</div>
                                <div className='text-xs font-normal text-primary-500 mt-0.5'>3. Josef Salátek</div>
                                <div className='text-xs font-normal text-primary-500 mt-0.5'>4. Josef Salátek</div>
                                <div className='text-xs font-normal text-primary-500 mt-0.5'>5. Josef Salátek</div>
                            </div>
                        </div>
                        <ArrowSmallRightIcon className='h-8 text-primary-900 ml-0.5' />
                    </div>
                    
                </div>
            </Link>
            <Link to='/login'>
                <div className='rounded-md shadow-sm mb-1 py-3 px-4 text-primary-900 font-medium bg-primary-100'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <div className='text-2xl'>Liga 1</div>
                            <div className='text-xs my-1 flex items-center'><CalendarDaysIcon className='h-3 text-primary-900 mr-1'/>22.09.2023</div>
                            <div className='flex flex-wrap gap-x-2'>
                            <div className='text-xs font-normal text-primary-500 mt-0.5'>1. Josef Salátek</div>
                            <div className='text-xs font-normal text-primary-500 mt-0.5'>2. Josef Salátek</div>
                            <div className='text-xs font-normal text-primary-500 mt-0.5'>3. Josef Salátek</div>
                            <div className='text-xs font-normal text-primary-500 mt-0.5'>4. Josef Salátek</div>
                            <div className='text-xs font-normal text-primary-500 mt-0.5'>5. Josef Salátek</div>
                            </div>
                        </div>
                        <ArrowSmallRightIcon className='h-8 text-primary-900 ml-0.5' />
                    </div>
                    
                </div>
            </Link>
            
            <div className='rounded-md shadow-sm mb-1 py-3 px-4 text-primary-900 font-medium bg-primary-50'>
                <div className='flex justify-between items-start'>
                    <div>
                        <div className='text-2xl'>Ukončeno</div>
                        <div className='text-xs my-1 flex items-center'><CalendarDaysIcon className='h-3 text-primary-900 mr-1'/>22.09.2023</div>
                        <div className='flex flex-wrap gap-x-2'>
                        <div className='text-xs font-normal text-primary-500 mt-0.5'>1. Josef Salátek</div>
                        <div className='text-xs font-normal text-primary-500 mt-0.5'>2. Josef Salátek</div>
                        <div className='text-xs font-normal text-primary-500 mt-0.5'>3. Josef Salátek</div>
                        <div className='text-xs font-normal text-primary-500 mt-0.5'>4. Josef Salátek</div>
                        </div>
                    </div>
                    smazat
                </div>
               
            </div>
        </div>
    </>
  )
}

export default League