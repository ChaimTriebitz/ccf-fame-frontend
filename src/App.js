import { Msg } from './Msg'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'




function App() {

   document.title = 'Find A Medical Expert'

   return (
      <div className="App" >
         <Msg />
         <Header />
         <Main />
         <Footer />
      </div>
   )
}

export default App


