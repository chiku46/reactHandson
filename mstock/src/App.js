import React,{ Component } from 'react';
import './App.css';
import { MenuComponent } from './Components/menucomponents';
import LoginComponent from './Components/logincomponent';
import CompaniesListComponent from './Components/CompaniesListComponent';
import CompanyDetailsComponent from './Components/companydetailscomponent';
class App extends Component {

  state = {
    loggedin : false
  };

  changeLoggedinHandler = () => {
    this.setState(
      {
        loggedin: !this.state.loggedin
      }
    )
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">mStock App</a>
          <MenuComponent check = {this.state.loggedin} />
        </nav>
        <div className="container-fluid login">
          
          <CompaniesListComponent/>
        </div>
      </div>
    );
  }
}

export default App;
