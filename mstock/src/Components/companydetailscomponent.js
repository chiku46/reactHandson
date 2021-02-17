import React,{ Component } from 'react';

const CompanyDetailsComponent = (props) => {
    let title={
        'background-color':'#eee',
    };
    let cardstyle = {
        'width': '20rem',
        marginTop: "10px"
    };
    return(
        <div className="col-lg-3 col-sm-6">
            <div className="card" style={cardstyle}>
                <div className="card-header" style={title}>{props.companyName}</div>
                <p className="card-text text-center">{props.description}</p>
                <div className="card-footer" style={title}>Today's Price: ${props.currentPrice}</div>
            </div>  
            </div>
    );
}
export default CompanyDetailsComponent;