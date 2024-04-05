

import CarouselHome from '../../components/carousels/CarouselHome'
import History from '../../components/history'
import GridRooms from '../../components/gridRooms'
import './index.scss'

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <History />
      <GridRooms />
    </div>
  )
}

export default Home