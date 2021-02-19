import React from 'react';
const loggedin = (props) => {
    return(
    <div >
        <a href="#" onClick = {()=> props.pageHandle('companiesList')}> Companies </a>
        <a href="#" onClick = {()=> props.pageHandle('watchList')} > Watch List </a>
        <a href="#"> Compare Performance </a>
        <a href="#" onClick = {()=> props.pageHandle('login')}> Logout</a>
    </div> );
};
const anonymous = () => {
    return (<div>
        <a href="#">Login </a>
        <a href="#">Companies </a>
    </div>);
};
export const MenuComponent = (props) => {
    let header = (props.check) ? loggedin(props) : anonymous();
    return(
        <div>
        {header}
        </div>
    );
}