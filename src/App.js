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

  return <div className="flex">
    <DropDown onChange={handleSelect} options={options} value={selection} />
    <DropDown onChange={handleSelect} options={options} value={selection} />
  </div>
}

export default App;