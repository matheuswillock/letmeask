// import Router 
import { BrowserRouter, Route } from 'react-router-dom';

// import de pages
import {Home} from './pages/Home';
import { NewRoom } from './pages/NewRoom';


function App() {
  return (

    
    <BrowserRouter>


      {/* Se não passarmos exact as duas pages serão renderizadas juntas uma abaixo da outra */}
      <Route path='/' exact component={ Home } />
      <Route path='/rooms/new' component={ NewRoom } />


    </BrowserRouter>
    
  );
}

export default App; 
