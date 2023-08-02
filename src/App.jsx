
import './App.css'
import { Faq } from './components/Faq'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="app">
      <div className="container">
        <h4>Questions and answers about login</h4>
        <Faq />
      </div>
    </div>
  )
}

export default App
