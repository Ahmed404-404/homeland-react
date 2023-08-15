import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Details from "./pages/Details"
import {Routes,Route} from "react-router-dom"

function App() {

  return (
    <main className="max-w-[1440px] mx-auto">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
