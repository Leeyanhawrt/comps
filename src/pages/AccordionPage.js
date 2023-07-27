import Accordion from "../components/Accordion";

function AccordionPage() {
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

export default AccordionPage;