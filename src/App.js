import Button from "./Button";
import { GoBell } from 'react-icons/go'

function App() {
  const handleClick = () => {
    console.log("Testing")
  }

  return (
    <div>
      <div><Button primary rounded outline className="mb-5" onClick={handleClick}>Prio 3</Button></div>
      <div><Button danger>Prio 4</Button></div>
      <div><Button warning outline>Prio 5</Button></div>
      <div><Button success><GoBell />Prio 6</Button></div>
      <div><Button secondary>Prio 7 </Button></div>
    </div>
  )
}

export default App;