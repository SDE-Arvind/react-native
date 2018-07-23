import * as ActionTypes from './ActionTypes'
import {connect} from 'react-redux'
import ServiceComponent from '../Componects/ServiceComponent'

const mapStateToProps=(state)=>({
isLoading: state.serviceReducer.isLoading,
error: state.serviceReducer.error,
data: state.serviceReducer.data

})


const mapDispatchToProps=(dispatch)=>({
callService: () => dispatch(callWebService())

})

export const serviceActionPending = () => ({
    type: ActionTypes.SERVICE_PENDING
})

export const serviceActionError = (error) => ({
    type: ActionTypes.SERVICE_ERROR,
    error: error
})

export const serviceActionSuccess = (data) => ({
    type: ActionTypes.SERVICE_SUCCESS,
    data: data
})

export const callWebService=()=>{
return dispatch => {
     dispatch(serviceActionPending())
     
     fetch('https://www.reddit.com/r/reactjs.json')
     .then((response) => response.json())
     .then((responseJson) => {
         console.log(responseJson)
         dispatch(serviceActionSuccess(responseJson.data.children))
     })
     .catch((error) => {
         dispatch(serviceActionError(error))
     });
}
}


export default connect(mapStateToProps, mapDispatchToProps)(ServiceComponent);
