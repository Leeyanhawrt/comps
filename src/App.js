import Button from "./components/Button";
import Accordion from "./components/Accordion";
import { GoBell } from 'react-icons/go'

function App() {
  const items = [
    {
      label: "Can I use react on a proeject",
      content: "You can use react on any project that you want"
    },
    {
      label: "Hello hello test",
      content: "That is content not title"
    },
    {
      label: "Last test",
      content: "Is it really now?"
    }
  ];

  return <Accordion items={items} />;
}

export default App;