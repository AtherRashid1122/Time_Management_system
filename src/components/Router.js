



import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react'
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/App/Dashboard";
import Admin from "./Pages/Auth/Admin";
import Worklog from "./Pages/App/Worklogs";
import Pagination from "./Pages/App/Pagination/Pagination";
import { useDispatch, useSelector } from 'react-redux'
const Router = () => {

    const isloggedin = useSelector(state => state.Userreducer.isloggedin)
    const adminlogin = useSelector(state => state.Dashboardreducer.adminlogin)



    const logincheck = localStorage.getItem('isLogin')
    // console.log("logincheck kkkkkkkkkkk", logincheck)

    const check = localStorage.getItem('logindatais') ? JSON.parse(localStorage.getItem('logindatais')) : null
    const role = check ? check.data.user.roles[0].name : ''


    return (
        // <div>
        //     <BrowserRouter>

        //         <Switch>
        //             <Route exact path="/" component={Login} />
        //             <Route exact path="/Register" component={Register} />
        //             <Route exact path="/Dashboard" component={Dashboard} />
        //             <Route exact path="/Admin" component={Admin} />
        //             <Route exact path="/Pagination" component={Pagination} />
        //         </Switch>
        //     </BrowserRouter>
        // </div>

        <div>
            <BrowserRouter>


                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    {role == 'admin' ? <Route exact path="/Worklog" component={Worklog} /> : null}

                    {logincheck ? <Route exact path="/Dashboard" component={Dashboard} /> : "Something Went Wrong"}
                    {role == 'admin' || role == 'manager' ? <Route exact path="/Admin" component={Admin} /> : "Something Went Wrong"}
                </Switch>
            </BrowserRouter>
        </div>


    )




}

export default Router