import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const person = [
    {firstname:"Doe", lastname:"Jane",age:"42",haircolor:"Black"}, 
    {firstname:"Smith", lastname:"Jhon",age:"88",haircolor:"Brown"},
    {firstname:"Fillmore", lastname:"Millard",age:"50",haircolor:"Brown"},
    {firstname:"Smith", lastname:"Maria",age:"62",haircolor:"Brown"}];
  return (
    <div className="App">
    
    {person.map((p,index) =>  <PersonCard key={index} person={p}/>)}
    </div>
  );
}

export default App;
