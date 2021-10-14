const axios = require('axios');


export const Dashboardaction = (data) => async (dispatch) => {



    dispatch({
        type: 'USERS',
        userdata: data,

    })
}



export const adminsignup = (data) => async (dispatch) => {



    dispatch({
        type: 'ADMIN_SIGNUP',
        userdata: data,
        // token: res.data.token
    })
}




export const Showalluser = (payload) => {

    return async (dispatch) => {
        const res = await axios.get('http://34.210.129.167/api/users', {

            headers: {
                'Authorization': 'Bearer ' + payload.token,
                'Content-Type': 'application/json'
            }

        })
        return res;


    };


}



export const Showallroles = (payload) => {

    // console.log("rolesss", payload.token)

    return async (dispatch) => {
        const res = await axios.get('http://34.210.129.167/api/users', {

            headers: {
                'Authorization': 'Bearer ' + payload.token,
                'Content-Type': 'application/json'
            }

        })
        return res;



    };


}


export const showpgination = (payload) => {

    // console.log("pagination", payload)

    return async (dispatch) => {
        const res = await axios.get(`http://34.210.129.167/api/users?page=${payload.currentpage}`, {

            headers: {
                'Authorization': 'Bearer ' + payload.token,
                'Content-Type': 'application/json'
            }

        })
        return res;



    };


}



export const showuserpgination = (payload) => {

    // console.log("pagination", payload)

    return async (dispatch) => {
        const res = await axios.get(`http://34.210.129.167/api/users?page=${payload.currentpage}`, {

            headers: {
                'Authorization': 'Bearer ' + payload.token,
                'Content-Type': 'application/json'
            }

        })
        return res;

    };


}






export const Updateddata = (payload) => {

    // console.log("updated data", payload)

    return async (dispatch) => {

        const res = await axios.put(`http://34.210.129.167/api/users/${payload.id}`, {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation,
            userType: payload.usertypedata
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload.token
            },

        })
        // return res;
        // return console.log("upadted user", res)

        if (res.data) {
            dispatch({
                type: 'LOGIN_ACTION',
                logindata: res.data,
                token: res.data.token
            })
            return res;
        } else {
            return res;
        }

    };


}


export const Updateddatamanager = (payload) => {

    console.log("updated data manager", payload)

    return async (dispatch) => {

        const res = await axios.put(`http://34.210.129.167/api/users/${payload.id}`, {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation,
            userType: payload.usertypedata
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload.token
            },

        })
        return res;


    };


}







export const Updateduserlog = (payload) => {

    // console.log("update", payload.logid)
    // console.log("update userid", payload.id)


    return async (dispatch) => {
        const res = await axios.put(`http://34.210.129.167/api/user/${payload.id}/work-logs/${payload.logid}`, {

            logDate: payload.logdate,
            hours: payload.loghours,
            description: payload.logdesc,
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + payload.token,
                    'Content-Type': 'application/json'
                }

            })
        return res;


    };

}




export const Deletedata = (payload) => {

    console.log("Deletedata", payload)

    return async (dispatch) => {

        const res = await axios.delete(`http://34.210.129.167/api/users/${payload.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload.token
            },

        })
        return res;


    };


}



export const Crateworklogaction = (payload) => {

    // console.log("token user", payload)

    return async (dispatch) => {
        const res = await axios.post(`http://34.210.129.167/api/user/${payload.id}/work-logs`, {

            logDate: payload.logdate,
            hours: payload.loghours,
            description: payload.logdesc,
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + payload.token,
                    'Content-Type': 'application/json'
                }

            })
        return res;
        // return console.log("response getuser", res)



    };


}





export const Getlogusers = (payload) => {

    // console.log("token id response", payload.id)

    return async (dispatch) => {
        const res = await axios.get(`http://34.210.129.167/api/user/${payload.id}/work-logs`,
            {
                headers: {
                    'Authorization': 'Bearer ' + payload.token,
                    'Content-Type': 'application/json'
                }

            })
        // return res;
        // console.log("response  getuser ", res.data)

        if (res.data) {
            dispatch({
                type: 'GET_USER',
                getuser: res.data,
                // token: res.data.token
            })
            return res;
        } else {
            return res;
        }

    };


}







export const Getadminusers = (payload) => {

    // console.log("token id response", payload.id)

    return async (dispatch) => {
        const res = await axios.get(`http://34.210.129.167/api/user/${payload.id}/work-logs`,
            {
                headers: {
                    'Authorization': 'Bearer ' + payload.token,
                    'Content-Type': 'application/json'
                }

            })
        // return res;
        // console.log("response  getuser ", res.data.workLogs)

        if (res) {
            dispatch({
                type: 'GET_ADMIN_USER_LOG',
                admingetuser: res.data.workLogs,
                // token: res.data.token
            })
            return res;
        } else {
            return res;
        }

    };


}


export const Updatedadminuserlog = (payload) => {

    return async (dispatch) => {
        const res = await axios.put(`http://34.210.129.167/api/user/${payload.id}/work-logs/${payload.logid}`, {

            logDate: payload.logdate,
            hours: payload.loghours,
            description: payload.logdesc,
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + payload.token,
                    'Content-Type': 'application/json'
                }

            })
        return res;


    };

}





export const Filterlogaction = (payload) => {
    return async (dispatch) => {
        const res = await axios.get(`http://34.210.129.167/api/work-logs/${payload.to}/${payload.from}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + payload.token,
                    'Content-Type': 'application/json'
                }

            })
        return res

    };
}

export const Submitpreffredhours = (payload) => {
    // console.log("preffered hours", payload)
    return async (dispatch) => {
        const res = await axios.patch(`http://34.210.129.167/api/users/${payload.loginidget}/preferred-working-hours`, {
            workingHours: payload.prefferedhours
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + payload.token,
                    'Content-Type': 'application/json'
                }

            })
        return res;

    };


}

