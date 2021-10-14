// import React, { useState } from 'react'
// import { useHistory } from 'react-router'
// import { useDispatch } from 'react-redux'
// import { Loginaction } from '../../../Redux/Action/Action'
// import './Login.css'
// const axios = require('axios');
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// import Box from '@mui/material/Box';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Person from '@material-ui/icons/Person';
// import Lock from '@material-ui/icons/Lock';
// const Login = () => {

//     const [email, setemail] = useState()
//     const [password, setpassword] = useState()
//     const history = useHistory()
//     const dispatch = useDispatch()

//     // const Hitapi = () => {
//     //     const res = axios.post('http://34.210.129.167/api/login', {

//     //         email: 'zubair123@test.com',
//     //         password: 'Lights123!'
//     //     })
//     //         .then(function (response) {
//     //             console.log("login", response);
//     //         })
//     //         .catch(function (error) {
//     //             console.log(error);
//     //         });
//     // }

//     const HitRegister = () => {
//         const config = {
//             method: 'post',
//             url: 'http://34.210.129.167/api/register',
//             // headers: {
//             //     Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zNC4yMTAuMTI5LjE2N1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzMzU1MDQ0MywiZXhwIjoxNjMzNTU0MDQzLCJuYmYiOjE2MzM1NTA0NDMsImp0aSI6IjZYTHlDUW1ieDFDOWZiYWkiLCJzdWIiOjcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Zk0P79VaSAb29tV2XnwFJ_JTCozsxU_JKEoS5ntM7L0"}`,
//             //     'Content-Type': 'application/json'
//             // },
//             body: {
//                 firstName: "atherr",
//                 lastName: "Rashidd",
//                 email: "Atherrashid@test.com",
//                 password: "Lights123!",
//                 password_confirmation: "Lights123!"
//             }
//         }
//         axios(config).then(response => console.log(response)).catch(err => console.error(err))
//     }

//     const HandleLogin = async () => {

//         const res = await dispatch(Loginaction({ email, password }))
//         if (res.data) {
//             history.push('./Dashboard')
//             console.log('correct')
//         }
//         else {
//             console.log('Incorrect')
//         }
//     }
//     const handleemail = (e) => {
//         setemail(e.target.value)
//     }
//     const handlepassword = (e) => {
//         setpassword(e.target.value)
//     }

//     return (
//         <div>
//             <div className="Login">
//                 <text >
//                     Login Page
//                 </text>
//             </div>

//             <div className="Loginfields">
//                 <div className="Inputfield">

//                     <input onChange={handleemail} className="Input" placeholder="Enter Email ">
//                     </input>
//                 </div>
//                 <div className="Inputfield">

//                     <input onChange={handlepassword} className="Inputfield" placeholder="Enter password ">

//                     </input>
//                 </div>
//             </div>
//             <div className="Loginfields">
//                 <button onClick={HandleLogin} >Log in</button>
//                 <button onClick={HandleLogin} >Log out</button>
//             </div>
//             {/* <text onClick={HitRegister}>
//                 Register
//             </text> */}
//         </div>
//     )
// }
// export default Login



import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { Loginaction } from '../../../Redux/Action/Action'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import './Login.css'
const axios = require('axios');


const Login = () => {

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const history = useHistory()
    const dispatch = useDispatch()
    const HandleLogin = async () => {
        const res = await dispatch(Loginaction({ email, password }))
        if (res.data) {
            setTimeout(() => {
                history.push('./Dashboard')
            }, 3000);
            console.log('correct')
        }
        else {
            console.log('Incorrect')
        }
    }
    const handleemail = (e) => {
        setemail(e.target.value)
    }
    const handlepassword = (e) => {
        setpassword(e.target.value)
    }

    return (
        // <div style={{
        //     height: '580px',
        //     backgroundImage: `url("https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg")`
        // }}>

        <div className="container" >
            {/* <div className="Login">
                <text >
                    Login Page
                </text>
            </div> */}

            <div className="Loginfields">

                <div className="icon">
                    <Person style={{ marginTop: '20px', color: 'white', fontSize: '60px', }} />
                </div>
                <div className="Inputfield">
                    <Box sx={{ alignItems: 'flex-end' }}>
                        <AccountCircle style={{ marginTop: '20px', fontSize: '25px' }} sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField onChange={handleemail} className="Inputfield" id="input-with-sx" label="Enter Email" variant="standard" />
                    </Box>


                </div>
                <div className="Inputfield">

                    <Lock style={{ marginTop: '20px', color: 'grey', fontSize: '25px', marginRight: '5px' }} />
                    <TextField onChange={handlepassword} className="Inputfield" id="input-with-sx" label="Enter Last Name" variant="standard" />


                </div>

                <div className="button">
                    {/* <button  >Submit</button> */}
                    <Button onClick={HandleLogin} variant="contained">Log in</Button>

                </div>

                <div className="button" style={{ display: 'flex' }}>
                    <h6>Dont have an account? </h6>
                    <Link to='./Register'>  <h6 > Signup</h6></Link>
                </div>

            </div>
            {/* <div className="Loginfields">
                <button onClick={HandleLogin} >Log in</button>
                <button onClick={HandleLogin} >Log out</button>
            </div> */}
            {/* <text onClick={HitRegister}>
                Register
            </text> */}
        </div>
        // </div>
    )
}
export default Login