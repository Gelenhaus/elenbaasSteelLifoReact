
import './App.css';
import MainPage from './components/Main/index';
import Footer from './components/Footer/index';
import Banner from './components/Header/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner></Banner>
        <MainPage></MainPage>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
