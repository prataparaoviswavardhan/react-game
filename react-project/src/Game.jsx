import {useReducer} from "react";
import { useContext } from "react";
import {GameContext} from './App'
const Stats = {
        health : 100,
        power : 100,
        hunger : 20,
        attack : 0,
        status:"normal",
    }


export const Game=()=>{
    const enemy = useContext(GameContext);
    const reducer = (state,action)=>{
        switch(action.type){
            case "JUMP" :
                if(state.health>0 && state.hunger<100){
               return {
                ...state,
                health : state.health - 20,
                power: state.power - 20,
                hunger : state.hunger + 10,
                }
            
        } else{
            return{
                ...state,
                health : 0,
                power : 0,
                hunger : 0,
                status : "dead cause you jumped with low stats",
            }
        }
         case "EAT" :
         return{
                ...state,
                health : state.health + 20,
                power: state.power + 20,
                hunger : state.hunger - 10,
                status:"Resting"
                }
         case "SLEEP" :
            return {
                ...state,
                health: "sleeping...",
                power : "sleeping wait",
                hunger: "sleeping wait", 
            }  
        case "subSleep" :
            return{
                ...state,
                health : 100,
                power: 100,
                hunger : 40,
                }  
        case "ATTACK":
            if(state.health>action.payload.health && state.attack>action.payload.attack){
                return {
                    ...state,
                    power: state.power+300,
                    hunger : state.hunger+30,
                    health : state.health - state.health + 10,
                    status:"victory"
                }
            }
            return {
                ...state,
                health : 0,
                power: 0,
                hunger :0,
                status:"Escaped try leveling Up"
            }
        case "LVLUP" :
            return{
                ...state,
                attack:state.attack+150,
            }
        case "TRAIN" :
            return{
                ...state,
                status:"training please wait"
            }
               
    }
    return state;
    }
    
    const sleepFun = ()=>{
         setTimeout(()=>{
                dispatch({type:"subSleep"});
            },4000);
        dispatch({type:"SLEEP"});
       
    }
   
    const attackFun = ()=>{
        dispatch({type:"ATTACK",
            payload : enemy,
        })
    }
    const training=()=>{
        setTimeout(()=>{
            dispatch({type:"LVLUP"})
        },3000);
        dispatch({type:"TRAIN"});
    }
    const[state,dispatch]=useReducer(reducer,Stats);
    return <>
        <p> the player name is viswa</p>
        <p>health:{state.health}</p>
        <p>power : {state.power}</p>
        <p>hunger:{state.hunger}</p>
        <p>player attack capacity : {state.attack}</p>
        <p>player status:{state.status}</p>
        <button onClick = {()=>dispatch({type:"JUMP"})}>Move forward </button>
         <button onClick = {()=>dispatch({type:"EAT"})}>eat bruh </button>
        <button onClick = {sleepFun}>Sleep</button>
        <button onClick = {attackFun}>attack</button> 
        <button onClick = {training}>Level up</button>
        </>
}