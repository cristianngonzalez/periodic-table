import logo from './logo.svg';
import './App.css';

import data from './data.json';
//Components
import FilterComponent from './Components/FilterComponent/FilterComponent';
import TableComponent from './Components/TableComponent/TableComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';

function App() {

  console.log(data);

  return (
    <div className="App">
      <FilterComponent></FilterComponent>
      <TableComponent elements={data[0].elements} types={data[0].types}></TableComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
