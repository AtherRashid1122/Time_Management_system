const axios = require('axios');

export const Loginaction = (data) => {
    return async (dispatch) => {
        const res = await axios.post('http://34.210.129.167/api/login', {
            email: data.email,
            password: data.password
        });


        let login;
        localStorage.setItem('logindatais', JSON.stringify(res))

        localStorage.setItem('isLogin', true)


        if (res.data) {

            dispatch({

                type: 'LOGIN_ACTION',
                logindata: res.data,
                token: res.data.token,
                loginuserid: res.data.user.id
            })
            return res;
        } else {
            return res;
        }

    };


}



export const Registeraction = payload => {

    return async (dispatch) => {
        const res = await axios.post(`http://34.210.129.167/api/register`, {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation
        })






        if (res.data) {
            dispatch({
                type: 'REGISTRATION_ACTION',
                registerdata: res.data
            })
            return res;
        } else {
            return res;
        }

    };
}





export const Adminaction = payload => {
    // console.log("payload data", payload.usertypedata)
    return async (dispatch) => {
        // const request = `http://34.210.129.167/api/register`;
        // const res = await axios.post(request, payload,
        const res = await axios.post(`http://34.210.129.167/api/users`, {
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
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error.response)
        // });




        // console.log("userrrr", res)

        if (res.data) {
            dispatch({
                type: 'ADMIN_ACTION',
                admindata: res.data,

            })
            return res;
        } else {
            return res;
        }

    };
}

export const Logoutaction = payload => {
    // console.log("payload data", payload.usertypedata)
    localStorage.clear()
    return async (dispatch) => {
        dispatch({
            type: 'LOG_OUT',

        })



    };
}