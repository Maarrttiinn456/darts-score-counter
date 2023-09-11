//components
import InputField from '../Components/InputField'
import Button from '../Components/Button'

const Login = () => {
  return (
    <div className='text-center w-72 mx-auto'>
    <div className='mb-6 text-3xl font-semibold text-primary-900 text-left'>
        Přihlásit se
        </div>
        <div className="flex flex-col gap-3">
          <InputField
            type="text"
            placeholder="E-mail"
            name="email"
          />
          <InputField
              type="password"
              placeholder="Heslo"
              name="text"
          />
        </div>
        <div className="mt-6 mx-auto">
          <Button text="Přihlásit se" isFull={true}/>
        </div>
    </div>
  )
}

export default Login