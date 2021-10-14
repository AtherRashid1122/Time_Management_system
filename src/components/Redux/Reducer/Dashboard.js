const initialstate = {
    users: [],
    userroles: [],
    adminlogin: false,
    worklog: {},
    adminworklog: {}
}

const Dashboardreducer = (state = initialstate, action) => {
    // console.log("action reducer state", state.userroles)
    switch (action.type) {

        case 'USERS': return {
            ...state,
            users: [...state.users, action.userdata]

        }
        case 'SHOW_ALLUSERS':
            return {
                ...state,
                userroles: action.userall
            }

        case 'ADMIN_SIGNUP':
            return {
                ...state,
                adminlogin: true
            }


        case 'GET_USER':
            return {
                ...state,
                worklog: action.getuser
            }


        case 'GET_ADMIN_USER_LOG':
            return {
                ...state,
                adminworklog: action.admingetuser
            }
        default: return state;
    }
}

export default Dashboardreducer