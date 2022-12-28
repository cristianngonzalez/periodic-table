import logo from './logo.svg';
import './App.css';

import data from './data.json';
//Components
import FilterComponent from './Components/FilterComponent/FilterComponent';
import TableComponent from './Components/TableComponent/TableComponent';

function App() {

  console.log(data);

  return (
    <div className="App">
      <FilterComponent></FilterComponent>
      <TableComponent elements={data[0].elements} types={data[0].types}></TableComponent>
    </div>
  );
}

export default App;
