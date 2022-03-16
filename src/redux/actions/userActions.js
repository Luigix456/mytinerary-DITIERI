import axios from 'axios';

const userActions = {

    signUpUser: (userData) => {
        return async (dispatch, getState) => {

            const res = await axios.post('http://localhost:4000/api/auth/signUp', { userData })
            console.log(res.data)
            dispatch({type: 'message', 
                       payload: {view: true, message: res.data.message, success: res.data.success}});
            
        }
    },
    signInUser: (logedUser) => {

        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signIn', { logedUser })
            if(user.data.success){
            dispatch({type: 'user', payload: user.data.response.userData});
            }else dispatch({type: 'message',
            payload: {view: true,
                      message: user.data.message,
                      success: user.data.success}});
            

        } 
    },
    SignOutUser :(closeuser)=>{
        return async (dispatch, getState) => {
        const user = axios.post('http://localhost:4000/api/auth/signOut',{closeuser})
        dispatch({type: 'user', payload: null});
    } 
}
}
export default userActions;