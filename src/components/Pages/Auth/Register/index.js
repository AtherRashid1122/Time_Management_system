// import React, { useState } from 'react'
// import './Register.css'
// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router'
// import { Registeraction } from '../../../Redux/Action/Action'
// import TextField from '@mui/material/TextField';
// const Register = () => {
//     const history = useHistory()
//     const [email, setemail] = useState()
//     const [password, setpassword] = useState()
//     const [fname, setfname] = useState()
//     const [lname, setlname] = useState()
//     const [confpass, setconfpass] = useState()

//     const dispatch = useDispatch()

//     const handleemail = (e) => {
//         setemail(e.target.value)
//     }

//     const handlepassword = (e) => {
//         setpassword(e.target.value)
//     }


//     const handlfname = (e) => {
//         setfname(e.target.value)
//     }

//     const handlelname = (e) => {
//         setlname(e.target.value)
//     }

//     const handleregister = async () => {
//         // const data = { firstName: fname, lastName: lname, email: email, password: password, password_confirmation: confpass }
//         dispatch(Registeraction({ firstName: fname, lastName: lname, email: email, password: password, password_confirmation: confpass }))
//         history.push('./')

//     }
//     const handlelconfpass = (e) => {
//         setconfpass(e.target.value)
//     }


//     // console.log("handle lname", lname)
//     return (

//         <div>
//             <div className="Login">
//                 <text >
//                     Register Page
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

//                 <div className="Inputfield">

//                     <input onChange={handlfname} className="Inputfield" placeholder="Enter First Name  ">
//                     </input>
//                 </div>



//                 <div className="Inputfield">

//                     <input onChange={handlelname} className="Inputfield" placeholder="Enter Last Name">
//                     </input>
//                 </div>

//                 <div className="Inputfield">

//                     <input onChange={handlelconfpass} className="Inputfield" placeholder="Enter confirm pass">
//                     </input>
//                 </div>



//             </div>
//             <div className="Loginfields">
//                 <button onClick={handleregister} >Submit</button>
//             </div>

//         </div>



//     )
// }
// export default Register














import React, { useState } from 'react'
import './Register.css'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Registeraction } from '../../../Redux/Action/Action'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';


import { Icon } from '@mui/material'

const Register = () => {
    const history = useHistory()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [confpass, setconfpass] = useState()

    const dispatch = useDispatch()

    const handleemail = (e) => {
        setemail(e.target.value)
    }

    const handlepassword = (e) => {
        setpassword(e.target.value)
    }


    const handlfname = (e) => {
        setfname(e.target.value)
    }

    const handlelname = (e) => {
        setlname(e.target.value)
    }

    const handleregister = async () => {
        // const data = { firstName: fname, lastName: lname, email: email, password: password, password_confirmation: confpass }
        dispatch(Registeraction({ firstName: fname, lastName: lname, email: email, password: password, password_confirmation: confpass }))
        history.push('./')

    }
    const handlelconfpass = (e) => {
        setconfpass(e.target.value)
    }


    // console.log("handle lname", lname)
    return (

        <div className="container">
            {/* <div className="Login">
                <text >
                    Register Page
                </text>
            </div> */}

            <div className="Loginfields">


                <div className="icon">
                    <Person style={{ marginTop: '20px', color: 'white', fontSize: '60px', }} />
                </div>
                <div className="Inputfield">

                    <Person style={{ marginTop: '20px', color: 'grey', fontSize: '25px', marginRight: '5px' }} />

                    <TextField className="fontsize" onChange={handlfname} className="Inputfield" id="input-with-sx" label="Enter First Name " variant="standard" />


                </div>


                <div className="Inputfield">
                    <Person style={{ marginTop: '20px', color: 'grey', fontSize: '25px', marginRight: '5px' }} />

                    <TextField onChange={handlelname} className="Inputfield" id="input-with-sx" label="Enter Last Name" variant="standard" />


                </div>

                <div className="Inputfield">

                    <Box sx={{ alignItems: 'flex-end' }}>

                        <AccountCircle style={{ marginTop: '20px', fontSize: '25px' }} sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

                        <TextField onChange={handleemail} className="Inputfield" id="input-with-sx" label="Enter Email" variant="standard" />

                    </Box>

                </div>
                <div className="Inputfield">
                    <Lock style={{ marginTop: '20px', color: 'grey', fontSize: '25px', marginRight: '5px' }} />

                    <TextField onChange={handlepassword} className="Inputfield" id="input-with-sx" label="Enter password" variant="standard" />


                </div>







                <div className="Inputfield">

                    <Lock style={{ marginTop: '20px', color: 'grey', fontSize: '25px', marginRight: '5px' }} />

                    <TextField onChange={handlelconfpass} className="Inputfield" id="input-with-sx" label="Enter confirm pass" variant="standard" />


                </div>

                <div className="button">
                 
                    <Button onClick={handleregister} variant="contained">Register</Button>

                </div>

            </div>


        </div >



    )
}
export default Register