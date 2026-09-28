import { useReducer } from "react"

export const Students = ()=>{
    const reducer=(state,action)=>{
        if(action.type=== "love"){
            return{
                ...state,
                life : "ruined cause of you",
                 mood : "sad",
                feels : "fuck you",
             } ;
            }
        return state;
    }
    const StudentData = {
         name :"buk",
        type : "love",
        age : 29,
        life : "happy",
        mood : "joyful",
        feels: "dgaf"
    };
    const initialState = StudentData;
    const[state,dispatch]=useReducer(reducer,initialState);
    
    return <>
    <p>{state.name} is {state.life}  </p>
    <p>she fells {state.mood}</p>
    <button onClick = {()=>dispatch(StudentData)}> Button to kill her BF</button>  
        </>
}