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
    companies = () =>{
        console.log("Hello from the inside");
        return(
        this.state.repos.map((item) => {
            console.log(item.companyId);
            console.log(item.companyName);
           return(
                <CompanyDetailsComponent companyName={item.companyName}
                description={item.description}
                currentPrice={item.currentStockPrice}/>
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