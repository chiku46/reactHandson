import React,{Component} from 'react';
import '../Stylesheets/mystyle.css'
export class Cart extends Component{
    render(){
        return(
            <div>
                <table border="1" className="center">
                    <tr>
                        <th> Name </th>
                        <th> Price </th>
                    </tr>
                {this.props.item.map((item)=>
                    {
                        return (
                            <tr>
                                <td>{item.itemname}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })
                }
                </table>
            </div>
        )
    }
}