import React,{ Component } from 'react';
const LoginComponent = () => {
    let star = {
        'font-size':'15px',
        'vertical-align':'middle',
        color:'red'
    };
    let submit = {
        'background-color':'#3966ed',
        'color':'white',
        padding:'10px',
        border:'1px solid white',
        'border-radius':'6px'
    };
    let mandatory = {
        color:'red'
    };
    return(
        <div className="login">
            <h1>Let's get started by login</h1>
            <br />
            <p style={mandatory}>Fields marked with * are mandatory</p>
            <form>
            <div className="row">
                <div className="form-group col-lg-4 col-md-6">
                    <label for="email">Email<sup style={star}>*</sup></label><br />
                    <input type="text" name="email"/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-12 col-md-6">
                    <label for="password">Password<sup style={star}>*</sup></label><br />
                    <input type="password" name="password"/>
                </div>
            </div>   
            <div className="row">
                <div className="form-group col-lg-12 col-md-6">
                    <button style={submit} type="submit">Submit</button>
                </div>
            </div> 
            </form>         
        </div>  
    );
}

export default LoginComponent;