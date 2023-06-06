import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Tiles from './components/Tiles';
import { Greetings } from './components/Greetings';
import { MainSearchbar } from './components/MainSearchBar';
import { NewsCard } from './components/NewsCard';
import { Searchbar } from './components/Searchbar';

function App() {
	return (
	  <>
	  <Header/>
	  <Greetings/>
	  <MainSearchbar/>
	  <NewsCard/>
	  
	  </>
	);
  }
  
  export default App;