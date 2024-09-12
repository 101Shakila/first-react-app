import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import Game from './Game'
import ColorList from './ColorList'
import Slots from './Slots'

function App() {
  return (
    <div>
      <Game values={[1, 2, 3, 4, 5]} />
      <ListPicker values={[1, 2, 3]} />
      <Greeter person="Abdullah" from="Egypt" />
      <Greeter person="Ahmed" from="Qatar" />
      <Greeter person="Shakila" from="Sri Lanka" />
      <Die numberSides={20} />
      <Die numberSides={5} />
      <Die numberSides={10} />
      <ColorList colors={["red", "blue", "green", "pink"]} />
      <Slots val1="d" val2="d" val3="d" />
      <Slots val1="d" val2="x" val3="d" />
    </div>
  )
}

export default App
