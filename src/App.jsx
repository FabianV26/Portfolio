import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return(
    <BrowserRouter>
    <div className="relative z- 0 bg-primary">
      <div className= "bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero />
      </div>
      <About/>
      <div className="relative z-0">
      {!isMobile && <StarsCanvas />}
        <Experience isMobile={isMobile} /> {/* Pass isMobile as a prop */}
      </div>
      {!isMobile && <Tech />} 
      <Works isMobile={isMobile}/>
      
    </div>
    </BrowserRouter>
  )
}

export default App