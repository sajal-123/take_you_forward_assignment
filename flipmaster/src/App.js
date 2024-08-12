import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { FlipCard } from './Pages/FlipCard';
import { LoginPage } from './Pages/LoginPage';
import { SignUpPage } from './Pages/SignUp';
import { QuestionPage } from './Pages/QuestionPage';

function App() {
  return<BrowserRouter>
  <Routes>
    <Route path='/signup' element={<SignUpPage />}/>
    <Route path='/login' element={<LoginPage />}/>
    <Route path='/' element={<FlipCard />}/>
    <Route path="/question/:id" element={<QuestionPage />} />
  </Routes>
  </BrowserRouter>
}

export default App;