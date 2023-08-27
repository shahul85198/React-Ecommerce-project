import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import AppProvider from './contexts/AppProvider';
import PageHeader from './components/PageHeader';
import { firebaseapp } from './firebaseapp';



function App() {
  return (
    <AppProvider>
    <div className="App">
      <PageHeader />
     <AppRouter />
    </div>
    </AppProvider>
  );
}

export default App;
