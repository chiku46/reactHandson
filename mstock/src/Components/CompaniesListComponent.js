import React,{ Component } from 'react';
import CompanyDetailsComponent from './companydetailscomponent';
class CompaniesListComponent extends Component {
    state = ({
        repos: ["hello"]
    });
    
    componentDidMount(){
        fetch('http://localhost:8080/companies')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            this.setState({repos: data});
            console.log(this.state.repos[0]);
        }); 
    }
     watch = {
        'background-color':'blue',
        color:'white',
        border:'1px solid #ccc'
    };
    buttonWatch = (
    <button className="ml-auto"
     style={this.watch} onClick=''>Watch</button>
    );
    
    companies = () =>{
        console.log("Hello from the inside Companies List");
        return(
        this.state.repos.map((item) => {
           return(
                <CompanyDetailsComponent company={item} button = {this.buttonWatch}/>
           ) ;
        })
        );
    } 
     render(){
         return(
             <div>
                <h1>Companies List</h1>
                <div className="container-fluid row">
                {this.companies()}
                </div>
             </div>
             
         )
     }
};
export default CompaniesListComponent;