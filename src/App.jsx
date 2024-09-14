import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import Game from './Game'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingList'

function App() {

  const data = [
    { id: 1, item: "Fish", quantity: 12, completed: false },
    { id: 2, item: "Masala", quantity: 5, completed: false },
    { id: 3, item: "Chicken", quantity: 13, completed: true },
    { id: 4, item: "Rice", quantity: 25, completed: false }
  ]


  return (
    <div>
      {
        <ShoppingList list={data} />
      /* <Game values={[1, 2, 3, 4, 5]} />
      <ListPicker values={[1, 2, 3]} />
      <Greeter person="Abdullah" from="Egypt" />
      <Greeter person="Ahmed" from="Qatar" />
      <Greeter person="Shakila" from="Sri Lanka" />
      <Die numberSides={20} />
      <Die numberSides={5} />
      <Die numberSides={10} />
      <ColorList colors={["red", "blue", "green", "pink"]} />
      <Slots val1="d" val2="d" val3="d" />
      <Slots val1="d" val2="x" val3="d" /> */}
    </div>
  )
}

export default App
