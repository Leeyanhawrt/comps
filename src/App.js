import Button from "./components/Button";
import Accordion from "./components/Accordion";
import { GoBell } from 'react-icons/go'

function App() {
  const items = [
    {
      id: 1,
      label: "Can I use react on a project",
      content: "You can use react on any project that you want"
    },
    {
      id: 2,
      label: "Hello hello test",
      content: "That is content not title"
    },
    {
      id: 3,
      label: "Last test",
      content: "Is it really now?"
    }
  ];

  return <Accordion items={items} />;
}

export default App;