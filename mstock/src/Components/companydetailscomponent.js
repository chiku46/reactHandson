import React,{ Component } from 'react';

const CompanyDetailsComponent = (props) => {
    let title={
        'background-color':'#ccc',
    };
    let text={
        'background-color':'#eee',
        height:'100px'
    };
    let cardstyle = {
        'width': '20rem',
        marginTop: "10px"
    };
    
    console.log(props.company);
    return(
        // <div className="col-lg-3 col-sm-6">
        //     <div className="card" style={cardstyle}>
        //         <div className="card-header" style={title}>{props.company.companyName}</div>
        //         <div className="card-body text-center" style={text}>{props.company.description}</div>
        //         <div className="card-footer d-flex" style={title}>
        //             Today's Price: ${props.company.currentStockPrice}
        //             {props.button}
        //             </div>
        //     </div>  
        //     </div>
        <div>
            hello
        </div>
    );
}
export default CompanyDetailsComponent;