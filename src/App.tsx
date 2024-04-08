import { AppRouter } from "./routers";
import HeaderSmall from "./components/layout/TopBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export const App = () => {
  return (

      <div className="classBody">
        <HeaderSmall />
        <Header />
        <AppRouter />
        <Footer />
      </div>
  )
}

