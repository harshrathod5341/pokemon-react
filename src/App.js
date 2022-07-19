import './App.css';
import Heading from "./Heading"
import Card from './Card';
import Database from './Database';


function App() {
  return (
    <div>
      <Heading pageTitle="Pokemon" />
      <Card Database={Database} />
    </div>
  );
}
export default App;
