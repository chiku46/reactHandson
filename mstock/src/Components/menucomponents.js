import React from 'react';
const loggedin = () => {
    return(
    <div >
        <a href="#"> Companies </a>
        <a href="#"> Watch List </a>
        <a href="#"> Compare Performance </a>
        <a href="#"> Logout</a>
    </div> );
};
const anonymous = () => {
    return (<div>
        <a href="#">Login </a>
        <a href="#">Companies </a>
    </div>);
};
export const MenuComponent = (props) => {
    let header = (props.check) ? loggedin() : anonymous();
    return(
        <div>
        {header}
        </div>
    );
}