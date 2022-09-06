// import types from "../ActionTypes";

// export default function(state={loginstatus:true},action)
// {
//     console.log("RED : " , action)
//     switch(action.type)
//     {
//         case types.TYPE_LOGIN : 
//                 return {...action.payload,loginstatus:true}   
//         case types.TYPE_LOGOUT : 
//                 return {...action.payload,loginstatus:false}    
//         default : return state
//     }
// }

import types from "../ActionTypes";

  export default function (state={role_id:1}, action)
{
        
    console.log("RED : " , action)
    switch(action.type)
    {
        case types.TYPE_ROLE_ID === 1 : 
                return {...action.payload,role_id:true}   
                      

                case types.TYPE_ROLE_ID ===2 : 
                return {...action.payload,role_id:true}   

           


        case types.TYPE_LOGOUT : 
                return {...action.payload,role_id:false}    

                
        default : return state
    }
}
