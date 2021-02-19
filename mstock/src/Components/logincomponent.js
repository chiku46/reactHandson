import React,{ Component , useState} from 'react';
const LoginComponent = (props) => {
    let star = {
        fontSize:'15px',
        verticalAlign:'top',
        color:'red'
    };
    let submit = {
        backgroundColor:'#3966ed',
        color:'white',
        padding:'10px',
        border:'1px solid white',
        borderRadius:'6px'
    };
    let mandatory = {
        color:'red'
    };
    const [validation, changeValidation] = useState({
        name:'',
        password:''
    });
    const [seeerrors, changeErrors] = useState({
        name: '' ,
        password:''
    })
    const changeEmailHandler = (event) => { 
        changeValidation({
            name: event.target.value,
            password: validation.password
            
        })
        if(validation.name.length<5){
            changeErrors({
                name:"Email should be 5 letters or more",
                password: seeerrors.password
            })
            useflag({
                flag:''
            })
        }
        else{
            changeErrors({
                name:"",
                password: seeerrors.password
            })
        }
    };
    const [flag, useflag] = useState({
        flag:''
    })
    const changePasswordHandler = (event) => { 
        changeValidation({
            name: validation.name,
            password: event.target.value
            
        })
        useflag({
            flag:''
        })
        if(validation.password.length<5){
            changeErrors({
                name:seeerrors.name,
                password: "Password should be 5 letters or more"
            })
        }
        else{
            changeErrors({
                name:seeerrors.name,
                password: ""
            })
        }
    };
    const checkSubmit = (event) => {
        event.preventDefault();
        if(seeerrors.name === '' && seeerrors.password === '')
        {
            console.log('no errors');
            props.click();
            props.pageHandle('companiesList');
        }
        else{
            console.log('Invalid username/password');
            useflag({
                flag:"Invalid username/password"
            })
            changeErrors({
                name:"",
                password: ""
            })
            
            alert('invalid username/passord');
            
        }
    }
    return(
        <div className="login">
            <h1>Let's get started by login</h1>
            <br />
            <div>
            <p style={mandatory}>Fields marked with * are mandatory<br />
            {
                flag.flag?
            <li>{flag.flag}</li>:null}
                   { seeerrors.name.length>0?
                    <li>{seeerrors.name}</li>:null }
                    {seeerrors.password.length>0?
                    <li>{seeerrors.password}</li>:null}
            </p>
            </div>
            
            <form onSubmit={checkSubmit} method="post">
            <div className="row">
                <div className="form-group col-lg-4 col-md-6">
                    <label htmlFor="email">Email<span style={star}>*</span></label><br />
                    <input type="text" name="email" onChange={changeEmailHandler}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-12 col-md-6">
                    <label htmlFor="password">Password<span style={star}>*</span></label><br />
                    <input type="password" name="password" onChange={changePasswordHandler}/>
                </div>
            </div>   
            <div className="row">
                <div className="form-group col-lg-12 col-md-6">
                    <button style={submit} type="submit" >Submit</button>
                </div>
            </div> 
            </form>
             
        </div>  
    );
}

export default LoginComponent;