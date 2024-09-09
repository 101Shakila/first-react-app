import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'


function App() {
  return (
    <div>
      <ListPicker values={[1, 2, 3]} />
      <Greeter person="Abdullah" from="Egypt" />
      <Greeter person="Ahmed" from="Qatar" />
      <Greeter person="Shakila" from="Sri Lanka" />
      <Die numberSides={20} />
      <Die numberSides={5} />
      <Die numberSides={10} />
    </div>
  )
}

export default App
