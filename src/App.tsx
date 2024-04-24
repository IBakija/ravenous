import './App.scss';
import BusinessList from './components/BusinessList/BusinessList';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';

function App(props) {
    return (
        <div className="App">
            <Header />
            <Hero />
            <main className="main">
                <BusinessList items={} />
            </main>
        </div>
    );
}

export default App;
