import DropDown from "./components/DropDown";
import { useState } from 'react'

function App() {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option);
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return <DropDown onChange={handleSelect} options={options} value={selection} />
}

export default App;