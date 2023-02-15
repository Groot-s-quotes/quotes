import './App.css';
import Header from './components/Header/Header.jsx';
import SignInButton from './components/SignInButton/SignInButton';
import LogInButton from './components/LogInButton/LogInButton';
import WatchQuotesButton from './components/WatchQuotesButton/WatchQuotesButton';

function App() {
  return (
    <div className="App">
      <Header>
        
      </Header>
      <SignInButton/>
      <LogInButton/>
      <WatchQuotesButton/>
    </div>
  );
}

export default App;
