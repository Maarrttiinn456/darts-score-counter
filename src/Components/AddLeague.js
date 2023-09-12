import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

//components
import Button from '../Components/Button'
import InputField from './InputField'

const AddLeague = () => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div>
                    <Button text='Založit ligu' outline='true'/>
                </div>
                <div className='hidden'>
                    <Button text='Přidat' bgColor='primary' textColor='white'/>
                </div>
            </div>

            <div className='mt-4 w-72 mx-auto'>
                <InputField
                    placeholder="22.09.2023"
                />
                <div className='mt-2'>
                    <div className='flex flex-col gap-1'>
                    <label className=' flex items-center text-primary-900'>
                        <input type="checkbox" className='mr-2 h-4 w-4 cursor-pointer rounded border border-primary-600 bg-white ring-offset-0 transition checked:border-primary-800 checked:bg-primary-500 hover:border-primary-800 hover:bg-primary-100 focus:border-primary-600 focus:ring-0 focus:ring-primary-200' />
                        Josef Salátek
                    </label>
                    <label className=' flex items-center text-primary-900'>
                        <input type="checkbox" className='mr-2 h-4 w-4 cursor-pointer rounded border border-primary-600 bg-white ring-offset-0 transition checked:border-primary-800 checked:bg-primary-500 hover:border-primary-800 hover:bg-primary-100 focus:border-primary-600 focus:ring-0 focus:ring-primary-200' />
                        Martin Schuster
                    </label>
                    </div>
                </div>
                <div className='mt-2 flex justify-center'>
                    
                </div>
            </div>
      </>
    
  )
}

export default AddLeague