import { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function DropDown({ options, onChange, value }) {

  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler);
    }
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return <Panel className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => { handleOptionClick(option) }} key={option.value}>{option.label}</Panel>;
  })

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label || 'Select...'}<GoChevronDown /></Panel>
      {isOpen && <div className="absolute top-full">{renderedOptions}</div>}
    </div>
  )

}

export default DropDown