// import { act } from "react-dom/test-utils"

const initialstate = {
    Login: {},
    register: [],
    token: {},
    isloggedin: false,
    Admindata: {},
    loginid: {}

}
const Userreducer = (state = initialstate, action) => {
    // console.log("reducer admin  data is after state ", state.Admindata)
    switch (action.type) {
        case 'LOGIN_ACTION':
            return {
                ...state,
                Login: action.logindata,
                token: action.token,
                isloggedin: true,
                loginid: action.loginuserid
            }
        case 'REGISTRATION_ACTION':
            return {
                ...state,
                register: [...state.register, action.registerdata]
            }

        case 'ADMIN_ACTION':
            // console.log("action.admindata", action.admindata)
            return {
                ...state,
                Admindata: action.admindata
                // Admindata: [...state.Admindata, action.admindata]
            }
        case 'LOG_OUT':
            return {
                token: null,
                isloggedin: false,
            }
        default: return state
    }
}
export default Userreducer