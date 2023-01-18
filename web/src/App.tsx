import './styles/global.css'

import { Habit } from './components/Habit';


const App = () => {
  return (
    <>
    <h1>Olá mané</h1>
    
      <Habit completed={3}/>
      <Habit completed={6}/>
      <Habit completed={7}/>
      <Habit completed={80}/>
  

    </>
  )
}

export default App
