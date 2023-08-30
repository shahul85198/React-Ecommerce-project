import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import AppProvider from './contexts/AppProvider';
import PageHeader from './components/PageHeader';
import { firebaseapp } from './firebaseapp';
import UserProvider from './contexts/UserProvider';

/*
 vaka context oka values adaina component 
ki ravali anty component a context lo wrap 
ai undali
*/

function App() {
  return (

    <AppProvider>
      <UserProvider>
    <div className="App">
      <PageHeader />
     <AppRouter />
    </div>
    </UserProvider>
    </AppProvider>
  );
}

export default App;
