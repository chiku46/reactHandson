import React,{ Component } from 'react';
class PerformanceComponent extends Component{
    state = ({
        repos: [""],
        companyCode1:null,
        companyCode2:null,
        from:null,
        to:null
    });
     star = {
        fontSize:'15px',
        verticalAlign:'top',
        color:'red'
    };
     submit = {
        backgroundColor:'#3966ed',
        color:'white',
        padding:'10px',
        border:'1px solid white',
        borderRadius:'6px'
    };
     mandatory = {
        color:'red'
    };
    componentDidMount(){
        let url = 'http://localhost:8080/stocks/compare-performance?'
        +'companyCode1='+this.state.companyCode1
        +'&companyCode2='+this.state.companyCode2
        +'&from='+this.state.from
        +'&to='+this.state.to;

        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            this.setState({repos: data});
            console.log(this.state.repos[0]);
        }); 
    }
    handleChange = (event) => {
        this.setState({
        [event.target.name] :event.target.value
        });
        console.log([event.target.name],event.target.value)
    }
    render(){
        return(
            <div>
                <h1>
                    Compare potential companies
                </h1>
                <h2>Make smart investment decision</h2>
                <form  method="post">
                    <div className="row">
                    <div className="form-group col-lg-6 col-sm-4" width="200px">
                        <label htmlFor="company1">Select company 1</label><br />
                        <input type="text" name="company1" placeholder="choose.." onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-lg-6 col-sm-4">
                        <label htmlFor="company2">Select company 2</label><br />
                        <input type="text" name="company2" placeholder="choose.." onChange={this.handleChange}/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-lg-6 col-sm-4">
                        <label htmlFor="from">From Date</label><br />
                        <input type="text" name="from" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-lg-6 col-sm-4">
                        <label htmlFor="to">To Date</label><br />
                        <input type="text" name="to" onChange={this.handleChange}/>
                    </div>
                    </div>   
                    <div className="row">
                    <div className="form-group col-lg-12 col-md-6">
                        <button type="submit" >Fetch Details</button>
                    </div>
                    </div>
                    {this.state.repos[0]} 
                </form>
                
            </div>
        )
    }
}
export default PerformanceComponent;