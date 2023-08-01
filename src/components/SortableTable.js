import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import Table from "./Table"
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { setSortColumn, sortedData, sortBy, sortOrder } = useSort(data, config);

  const updatedConfigs = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () =>
        <th className="cursor-pointer hover:bg-grey-100" onClick={() => { setSortColumn(column.label) }}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
    }
  })

  return <Table {...props} data={sortedData} config={updatedConfigs} />
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <div><GoArrowUp /><GoArrowDown /></div>;
  }

  if (sortOrder === null) {
    return <div><GoArrowUp /><GoArrowDown /></div>;
  } else if (sortOrder === 'asc') {
    return <div><GoArrowUp /></div>;
  } else if (sortOrder === 'desc') {
    return <div><GoArrowDown /></div>;
  }
}

export default SortableTable