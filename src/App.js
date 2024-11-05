import { Route, Routes } from 'react-router-dom'
import { Footer, Header, Main, Msg } from './cmps'                                                                
import { About, Home, Impact, News, Resources, DoctorForm } from './pages'


function App() {

   document.title = 'Find A Medical Expert'

   return (
      <div className="App" >
         <Msg />
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/news' element={<News />} />
            <Route path='/impact' element={<Impact />} />
            <Route path='/doctor-form' element={<DoctorForm />} />
         </Routes>
         <Footer />
      </div>
   )
}

export default App


