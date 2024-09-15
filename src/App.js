import { Msg } from './Msg'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'




function App() {

   document.title = 'ccf'

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


