import React,{ Component} from 'react';
export function OddPlayers([first,,third,,fifth]){
    return(
        <div>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </div>
    )
}
export function EvenPlayers([,second,,fourth,,sixth]){
    return(
        <div>
            <li> Second : {second}</li>
            <li> Fourth : {fourth}</li>
            <li> Sixth : {sixth}</li>
        </div>
    )
}
export function mergePlayers(){
    const T20Players=['First Player','Second Player','Third Player'];
    const RanjiTrophyPlayers=['Fourth Player','Fifth Player','Sixth Player'];
    const players =  [...T20Players,...RanjiTrophyPlayers];
    return (
        <div>
            {players.map((item)=>
            {
                return(
                    <div>
                        <li>Mr. {item}</li>
                    </div>
                )
            })}
        </div>
    );
}