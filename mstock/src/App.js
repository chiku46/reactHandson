import React,{ Component } from 'react';
import './App.css';
import { MenuComponent } from './Components/menucomponents';
import LoginComponent from './Components/logincomponent';
import CompaniesListComponent from './Components/CompaniesListComponent';
import CompanyDetailsComponent from './Components/companydetailscomponent';
import WatchListComponent from './Components/watchlistcomponent';
import PerformanceComponent from './Components/performancecomponent';
class App extends Component {

  state = {
    loggedin : false,
    page : 'login'
  };

  changeLoggedinHandler = () => {
    this.setState(
      {
        loggedin: !this.state.loggedin
      }
    )
    console.log("Logged in property changed to "+this.state.loggedin)
  }
  changePageHandler = (newName) => {
    this.setState({
      page: newName
    });
    console.log("Changed page to Companies list"+newName.type)
  }
  pageRenderer = () => {
    switch(this.state.page){
      case 'login':
        return <LoginComponent click={this.changeLoggedinHandler} pageHandle = {this.changePageHandler}/>
      case 'companiesList':
        return <CompaniesListComponent pageHandle = {this.changePageHandler}/>
      case 'watchList':
        return <WatchListComponent pageHandle = {this.changePageHandler}/>
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">mStock App</a>
          <MenuComponent check = {this.state.loggedin} pageHandle = {this.changePageHandler} click={this.changeLoggedinHandler}/>
        </nav>
        <div className="container-fluid login">
          {this.pageRenderer()}
          <PerformanceComponent/>
        </div>
      </div>
    );
  }
}

export default App;
