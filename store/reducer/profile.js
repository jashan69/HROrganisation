import EmployerModel from "../../model/EmployerModel"
import { LOGIN, LOG_OUT, CREATE_ACCOUNT, FETCH_PROFILE } from "../action/profile"

const initialState={
    detailList:[],
    token:null,
    userid:null
}

export default authHandler=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                detailList:[...state.detailList],
                token:action.token,
                userid:action.userid
            }
        case CREATE_ACCOUNT:
            const EmployerDetail=new EmployerModel(
                action.detailslist.id,
                action.detailslist.depid,
                action.detailslist.compid,
                action.detailslist.Name,
                action.detailslist.number,
                action.detailslist.email,
                action.detailslist.Age,
                action.detailslist.Role,
                action.detailslist.teamleader,
                action.detailslist.joinedDate
            )
            return{
                ...state,
                detailList:EmployerDetail,
                token:action.token,
                userid:action.userId
            }
        case LOG_OUT:
            return{
                ...state,
                detailList:[...state.detailList],
                token:null,
                userid:null
            }
        case FETCH_PROFILE:
            {
                return{
                    ...state,
                    detailList:action.profilelist,
                    token:action.Token,
                    userid:action.userId
                }
            }
        default:return state;
    }
}