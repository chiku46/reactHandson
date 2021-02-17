import React,{ Component } from 'react';

const CompanyDetailsComponent = (props) => {
    let title={
        'background-color':'#eee',
    };
    let cardstyle = {
        'width': '18rem'
    };
    return(
            <div className="card col-lg-3 col-md-3" style={cardstyle}>
                <div className="card-title" style={title}>{props.companyName}</div>
                <p className="card-text">{props.description}</p>
                <div className="card-title" style={title}>Today's Price: ${props.currentPrice}</div>
            </div>  
    );
}
export default CompanyDetailsComponent;