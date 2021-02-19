import React, { Component } from 'react';
import CompanyDetailsComponent from './companydetailscomponent'
class WatchListComponent extends Component {
    state = ({
        repos: [ "hello" ]
    });
    componentDidMount(){
        fetch('http://localhost:8080/watchList/1')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            this.setState({repos: data});
            console.log("hello hello"+this.state.repos[1].company.companyName);
        }); 
    }
    companies = () =>{
        console.log("Hello from the inside watch List compoenet");
        return(
        this.state.repos.length>0? 
        this.state.repos.map((item) => {
            console.log(item.company);
           return(
                <CompanyDetailsComponent company={item.company} button={this.buttonRemove}/>
           ) ;
        }):<h2>No company stock prices added to watch list</h2>);
    } 
    remove = {
        'background-color':'red',
        color:'white',
        border:'1px solid #ccc'
    };
    buttonRemove = (
    <button className="ml-auto"
     style={this.remove} onClick=''>Remove</button>
    );
    render(){
        return(
            <div>
            <h1>My Companies List</h1>
            <div className="container-fluid row">
                {this.companies()}
            </div>
            </div>
        )
    }
}

export default WatchListComponent;