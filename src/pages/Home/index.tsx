

import CarouselHome from '../../components/carousels/CarouselHome'
import History from '../../components/history'
import GridRooms from '../../components/gridRooms'
import CarouselPlacesStay from '../../components/carousels/CarouselPlacesStay'
const Home = () => {
  return (
    <div>
      <CarouselHome />
      <History />
      <GridRooms />
      <CarouselPlacesStay />
    </div>
  )
}

export default Home