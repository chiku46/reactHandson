import React,{ Component } from 'react';
export class ListofPlayers extends Component {
   
    render() {
        const players=[
            {name: "Dhoni",
            score: "100"},
            {name: "Kohli",
            score: "200"},
            {name: "Rohit",
            score: "300"},
            {name: "Sachin",
            score: "400"},
            {name: "Sehwag",
            score: "500"},
            {name: "Rishabh",
            score: "600"},
            
        ];

        var players70 =[];
        filterBelow70();
        
        return(
            <div>
                <div>
                    <h1>List of all players</h1>
               { players.map((item)=>
            {
                return(
                    <div>
                        <li>Mr.{item.name} <span>{item.score}</span></li>
                    </div>
                )
            })}
                </div>
                <hr/>
                <div>
                    <h1>List of Players below 400</h1>
                    {
                        players70.map((item)=>
                        {
                            return(
                                <div>
                                    <li>Mr.{item.name} <span>{item.score}</span></li>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        );
         function returnplayers(){
            players.map((item)=>
            {
                return(
                    <div>
                        <li>Mr.{item.name} <span>{item.score}</span></li>
                    </div>
                )
            })
        }
         function filterBelow70(){
            players.map((item)=>
            {
                if(item.score<400)
                {
                    players70.push(item);
                }
            })
            return(
                players70.map((item)=>
                {
                    return(
                        <div>
                            <li>Mr.{item.name} <span>{item.score}</span></li>
                        </div>
                    )
                })
            );
        }
    }
}