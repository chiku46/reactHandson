import React,{Component} from 'react';
import {Cart} from '../Components/Cart'

export class OnlineShopping extends Component{
    render(){
        const CartInfo =[{itemname:"Laptop",price:90000},
                            {itemname:"TV",price:90000}
        ];
        return (
            <div> 
                <h1 class="Heading"> Items Ordered :</h1>
                <Cart item={CartInfo} />
            </div>
        )
    }
}