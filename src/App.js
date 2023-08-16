import './App.css';
import CompanyList from './components/CompanyList';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateCompany from './components/CreateCompany';
import EmptyPage from './components/EmptyPage';
import DeleteCom from './components/DeleteCom';
import ModifyCom from './components/ModifyCom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <CompanyList />
          </Route>
          <Route exact path="/createcompany">
            <CreateCompany />
          </Route>
          <Route exact path="/modifyCom/:id">
            <ModifyCom />
          </Route>
          <Route exact path="/deleteCom/:id">
            <DeleteCom />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}


export default App;
