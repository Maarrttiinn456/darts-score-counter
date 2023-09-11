
//Components
import PlayersCard from '../Components/PlayersCard'
import LeagesList from '../Components/LeagesList'

const Homepage = () => {
  return (
    <div>
      <PlayersCard />
      <div className='border-b border-primary-200 my-10'></div>
      <LeagesList/>
    </div>
  )
}

export default Homepage