
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Updateddatamanager, Getadminusers, Getlogusers, Updateduserlog, Dashboardaction, Showalluser, Updateddata, Crateworklogaction, Showallroles, Deletedata, showpgination, adminsignup, Filterlogaction, showuserpgination, Submitpreffredhours } from '../../../Redux/Action/Dashboardaction'
import './style.css'
import { Logoutaction } from '../../../Redux/Action/Action'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const Dashboard = () => {
    const check = localStorage.getItem('logindatais') ? JSON.parse(localStorage.getItem('logindatais')) : null
    // console.log('user checking', check)
    const token1 = check ? check.data.token : ''
    const role = check ? check.data.user.roles[0].name : ''
    const loginidget = check ? check.data.user.id : ''

    const logincheck = localStorage.getItem('Login')


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = async () => {
        const resworklog = await dispatch(Filterlogaction({ to: to, from: from, token: token1, logdate: logdate, loghours: loghours, logdesc: logdesc, }))
        // console.log("res work log is ", resworklog.data.workLogs)
        // setworklog(resworklog.data.log)
        setfilterworklog(resworklog.data.workLogs)
        settoggle1(true)
        setIsOpen(true);
        setto('')
        setfrom('')
    }
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    function closeModal() {
        setIsOpen(false);
    }
    const handlepageclick = async (data) => {
        console.log(data.selected)
        let currentpage = data.selected + 1
        const res = await dispatch(showpgination({ currentpage: currentpage, token: token1 }))
        setfilterdata(res.data.users.data)
    }
    // const loginid = useSelector(state => state.Userreducer.loginid)
    // console.log("login id  is ", loginid)

    const [toggle, settoggle] = useState(false)
    const [toggle1, settoggle1] = useState(false)
    const [finduser, setfinduser] = useState()
    const [finduser1, setfinduser1] = useState([])
    // console.log("find userrr1", finduser1)
    const [store, setstore] = useState()
    // const token = useSelector(state => state.Userreducer.token)


    // const users = useSelector(state => state.Dashboardreducer.users)
    // const usermanger = useSelector(state => state.Userreducer)
    const pagenumber = []
    const [filterdata, setfilterdata] = useState([])
    const [userdata, setuserdata] = useState()
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setname] = useState('')
    const [pagination, setpagination] = useState([])
    const [lastname, setlastname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [conpass, setconfpass] = useState()
    const [id, setid] = useState()
    const [logdate, setlogdate] = useState()
    const [loghours, setloghours] = useState()
    const [logdesc, setlogdesc] = useState()
    const [usertype, setusertype] = useState()
    const [worklog, setworklog] = useState()
    const [worklogid, setworklogid] = useState()
    const [logid, setlogid] = useState()
    const [userid, setuserid] = useState()
    const [userworklog, setuserworklog] = useState()
    const [userfilterlog, setfilterworklog] = useState()
    const [prefferedhours, setpreffredhours] = useState()
    const [handleedit, sethanldeedit] = useState(false)
    const [showworklog, setshowworklog] = useState(false)
    // console.log("userworklog data is ", userworklog)
    const [to, setto] = useState()
    const [from, setfrom] = useState()
    const [showbutton, setshowbutton] = useState(false)
    useEffect(async () => {
        const res = await dispatch(Getlogusers({ id: loginidget, token: token1 }));
        // console.log("ather response", res.data.workLogs.data);
        setuserworklog(res.data.workLogs.data)
    }, [userworklog])
    
    useEffect(async () => {
        const res = await dispatch(Showalluser({ token: token1 }))
        setuserdata(res.data.users.data)
        setfilterdata(res.data.users.data)
        settoggle(true)
        if (res.status) {
            // console.log("correct")
        }
        else {
            console.log("Incorrect")
        }
    }, [])
    // console.log("worklog data is", worklog)
    const handlename = (e) => {
        setname(e.target.value)
    }
    const handlelastname = (e) => {
        setlastname(e.target.value)
    }
    const handlepass = (e) => {
        setpassword(e.target.value)
    }
    const handleconpass = (e) => {
        setconfpass(e.target.value)
    }
    const handleusertype = (e) => {
        setusertype(e.target.value)
    }
    const handleid = (e) => {
        setid(e.target.value)
    }
    const handleemail = (e) => {
        setemail(e.target.value)
    }
    const handleworklogid = (e) => {
        setworklogid(e.target.value)
        // setworklogid(userid)
    }
    const Submit = async () => {
        const resworklog = await dispatch(Crateworklogaction({ logdate: logdate, loghours: loghours, logdesc: logdesc, token: token1, id: loginidget }))
        // console.log("res work log is ", resworklog.data.log)
        setworklog(resworklog.data.log)
        settoggle1(true)
        setloghours('')
        setlogdesc('')
        setlogdate('')
        setshowworklog(false)
    }
    const showuser = async () => {
        const res = await dispatch(Showalluser({ token: token1 }))
        setuserdata(res.data.users.data)
        setfilterdata(res.data.users.data)
        settoggle(true)
        sethanldeedit(false)
        setshowbutton(false)
        // localStorage.clear()
        if (res.status) {
            console.log("correct")
        }
        else {
            console.log("Incorrect")
        }
    }
    const Updateadmin = () => {

        dispatch(Updateddata({ id: userid, firstName: name, lastName: lastname, email: email, password: password, password_confirmation: conpass, userType: usertype, token: token1 }))
        setid('')
        setname('')
        setlastname('')
        setemail('')
        sethanldeedit(false)
        setshowbutton(true)
    }

    const Update = () => {

        dispatch(Updateddata({ id: id, firstName: name, lastName: lastname, email: email, password: password, password_confirmation: conpass, userType: usertype, token: token1 }))
        setid('')
        setname('')
        setlastname('')
        setemail('')
    }
    const Updatemanager = async () => {
        const res = await dispatch(Updateddatamanager({ id: userid, firstName: name, lastName: lastname, email: email, password: password, password_confirmation: conpass, userType: usertype, token: token1 }))

        //console.log("upadte manager ", res)
        alert(res.data.message)
        setid('')
        setname('')
        setlastname('')
        setemail('')
    }
    const Updateuser = async () => {
        const res = await dispatch(Updateduserlog({ logdate: logdate, loghours: loghours, logdesc: logdesc, token: token1, id: loginidget, logid: logid }))
        // console.log("res user updated", res)
        setworklog(res.data.log)
        sethanldeedit(false)
        setlogdate('')
        setloghours('')
        setlogdesc('')
        setshowworklog(false)
    }
    const handleEdit = (item, index) => {
        setstore(index)
        setlogid(item.id)
        setname(item.firstName)
        setlastname(item.lastName)
        setemail(item.email)
        setloghours(item.hours)
        setlogdesc(item.description)
        setlogdate(item.log_date)
        sethanldeedit(true)
        setshowworklog(true)
        setshowbutton(true)
    }
    const handlelogdate = (e) => {
        setlogdate(e.target.value)
    }
    const handlelohhours = (e) => {
        setloghours(e.target.value)
    }
    const handlelogdesc = (e) => {
        setlogdesc(e.target.value)
    }
    const createuser = () => {
        history.push('./Admin')
        dispatch(adminsignup({ data: "ather" }))
        // prompt("hours")
    }
    const Delete = async (id) => {
        // console.log("deelte id is", id)
        dispatch(Deletedata({ id: id, token: token1 }))

    }

    const Deleteadmin = (id) => {
        // console.log("deelte id after", id)

        //dispatch(Deletedata({ id: userid, token: token }))

    }
    const Search = (e) => {
        let updated = []
        if (e.target.value.length >= 0) {
            updated = userdata?.filter((item) => {
                return item.firstName.includes(e.target.value)
            })
            setfilterdata(updated)
        }
        else {
            setfilterdata(userdata)
        }
    }
    const Showlogusers = async () => {
        const res = await dispatch(Getlogusers({ id: userid, token: token1 }));
        // console.log("ather response", res.data);
        // <Link to={`//Worklog?id=${userid}`}> Show details </Link>
        history.push('./Worklog')
    }
    const Showuseradmin = async () => {
        // console.log("user id all", userid)

        const res = await dispatch(Getadminusers({ id: userid, token: token1 }));
        // console.log("ather response", res.data);
        // <Link to={`//Worklog?id=${userid}`}> Show details </Link>
        history.push('./Worklog')
    }
    const Getuserid = (id) => {
        // console.log("id is", id)
        setuserid(id)
        // setworklogid(id)
    }
    const handletodate = (e) => {
        setto(e.target.value)
    }
    const handlefromdate = (e) => {
        setfrom(e.target.value)
    }
    const Filter = async () => {
        const resworklog = await dispatch(Filterlogaction({ to: to, from: from, token: token1, logdate: logdate, loghours: loghours, logdesc: logdesc, }))
        // console.log("res work log is ", resworklog.data.workLogs)
        // setworklog(resworklog.data.log)
        setuserworklog(resworklog.data.workLogs)
        settoggle1(true)
    }
    const Logout = () => {
        dispatch(Logoutaction())
        history.push('./')
    }
    const handleprefferedhours = (e) => {
        setpreffredhours(e.target.value)
    }
    const Submithours = async () => {
        const res = await dispatch(Submitpreffredhours({ loginidget, loginidget, prefferedhours: prefferedhours, token: token1 }))
        // console.log("update preffer ", res)
    }
    const handleuserworklog = () => {
        setshowworklog(true)
    }
    return (
        <div>
            <div className="Manager">
                {role == 'admin' || role == 'manager' ? <Button style={{ margin: '5px' }} onClick={createuser} variant="contained">Createuser</Button>
                    : <Button style={{ margin: '5px' }} onClick={handleuserworklog} variant="contained">Create worklogs</Button>}
                <h1>
                    {role}
                </h1>
                <div style={{ justifyContent: 'space-around' }}>
                    {role == 'admin' ? <input onChange={Search} placeholder="Search" type="text"></input>
                        : null}
                    <Button style={{ margin: '5px' }} onClick={Logout} variant="contained">    Logout {role}</Button>
                </div>
            </div>
            {role == 'manager' ? <div className="inputfields">
                <div style={{ padding: '20px' }}>
                    {showbutton ? < Button style={{ margin: '5px' }} onClick={showuser} variant="contained"> show updated data</Button> : null}
                </div>
            </div> : role == 'admin' ?
                <div className="inputfields">
                    <Button style={{ margin: '5px' }} onClick={showuser} variant="contained"> show user after update</Button>
                    <input value={userid || ''} onChange={handleworklogid} placeholder="Select ID" type="text"></input>
                    <Button style={{ margin: '5px' }} onClick={Showuseradmin} variant="contained">Show userlogs</Button>
                </div> : role == 'user' ? <div className="inputfields">
                    <input value={prefferedhours || ''} onChange={handleprefferedhours} placeholder="Preffered Hours" />
                    <Button style={{ margin: '5px' }} onClick={Submithours} variant="contained"> Submit hours</Button>
                </div> : null
            }
            {role == 'user' ?
                <div className="inputfields1">
                    {showworklog ? <div>
                        <input value={logdate || ''} onChange={handlelogdate} placeholder="Enter Log Date" />
                        <input value={loghours || ''} onChange={handlelohhours} placeholder="Enter Log Hours" />
                        <input value={logdesc || ''} onChange={handlelogdesc} placeholder="Enter Log Description" />
                        {/* <Button style={{ margin: '5px' }} onClick={Submit} variant="contained"> Submit</Button> */}
                        <Button style={{ margin: '5px' }} onClick={handleedit ? Updateuser : Submit} variant="contained"> {handleedit ? "Update" : "Submit"}</Button>
                    </div> : null}
                    <div>
                        <input value={to || ''} onChange={handletodate} placeholder="Enter To date" />
                        <input value={from || ''} onChange={handlefromdate} placeholder="Enter From date" />
                        {/* <Button style={{ margin: '5px' }} onClick={Filter} variant="contained">Filter</Button> */}
                        <Button style={{ margin: '5px' }} onClick={openModal} variant="contained">Filter</Button>
                    </div>
                </div> : role == 'manager' || role == 'admin' && handleedit ?
                    <div className="inputfields1">
                        {handleedit ?
                            <div className="inputfields1">
                                <h6 style={{ margin: '5px' }}>First Name</h6>
                                <input value={name} onChange={handlename} placeholder="first Name" />
                                <h6 style={{ margin: '5px' }}> Last Name</h6>
                                <input value={lastname} onChange={handlelastname} placeholder="last name" />
                                <h6 style={{ margin: '5px' }}> Email</h6>
                                <input value={email} onChange={handleemail} placeholder="email" />
                                {handleedit ? <Button style={{ margin: '5px' }} onClick={Updateadmin} variant="contained">  update user</Button> : null}
                            </div> : null}
                    </div>
                    : null
            }
            {role == 'admin' ? <div style={{ display: 'flex' }}>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>first Name</th>
                            <th>Last name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>Working hours</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterdata ? filterdata.map((item, index) => {
                            return (
                                // <tbody>
                                <tr key={index} onClick={() => Getuserid(item.id)}>
                                    <td >{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item?.roles[0]?.name}</td>
                                    <td>{item.working_hours}</td>
                                    <td onClick={() => handleEdit(item, index)} className="buttonstyle">Edit</td>
                                    <td onClick={() => Delete(item.id)} className="buttonstyle">Delete</td>
                                </tr>
                                // </tbody>
                            )
                        })
                            : "Ruko sabar kro"}
                    </tbody>
                </table>
            </div> : null
            }
            {
                toggle && role == 'manager' && filterdata.length > 0 ? <div style={{ display: 'flex' }}>
                    <table id="customers">
                        <thead>
                            <tr >
                                <th>id</th>
                                <th>first Name</th>
                                <th>Last name</th>
                                <th>email</th>
                                <th>role</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterdata ? filterdata.map((item, index) => {
                                return (
                                    // <tbody>
                                    <tr key={index} onClick={() => Getuserid(item.id)}>
                                        <td >{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item?.roles[0]?.name}</td>
                                        <td onClick={() => handleEdit(item, index)} className="buttonstyle">Edit</td>
                                        <td onClick={() => Delete(item.id)} className="buttonstyle">Delete</td>
                                    </tr>
                                    // </tbody>
                                )
                            })
                                : "Ruko sabar kro"}
                        </tbody>
                    </table>
                </div> : null
            }
            {
                role == 'user' ? <div style={{ display: 'flex' }}>
                    <table id="customers">
                        <thead>
                            <tr >
                                <th>Worklogdate</th>
                                <th>working hours</th>
                                <th> Description</th>
                                <th>Edit</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* {userdata ? userdata.map((item, index) => { */}
                            {userworklog ? userworklog.map((item, index) => {
                                return (
                                    // <tbody>
                                    <tr key={index} style={{ backgroundColor: item.hours >= item.user.working_hours ? 'green' : 'red' }} onClick={() => Getuserid(item.id)}>
                                        <td style={{ color: 'white' }}>{item.log_date}</td>
                                        <td style={{ color: 'white' }}>{item.hours}</td>
                                        <td style={{ color: 'white' }}>{item.description}</td>
                                        <td onClick={() => handleEdit(item, index)} className="buttonstyle">Edit</td>
                                        {/* <td onClick={() => Delete(item.id)} className="buttonstyle">Delete</td> */}
                                    </tr>
                                    // </tbody>
                                )

                            })
                                : "Ruko sabar kro"}

                        </tbody>
                    </table>
                </div> : null
            }
            {
                role == 'admin' || role == 'manager' || role == 'user' ?
                    <div style={{ marginTop: '40px' }}>
                        <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={100}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={6}
                            onPageChange={handlepageclick}
                            containerClassName={'pagination justify-content-center'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </div>
                    : null
            }
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal" >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Filter Data </h2>

                <div><table id="customers">
                    <tr>
                        <th>Worklogdate</th>
                        <th>working hours</th>
                        <th> Description</th>
                    </tr>
                    {userfilterlog ? userfilterlog.map((item, index) => {
                        return (
                            <tr style={{ backgroundColor: item.hours >= item.user.working_hours ? 'green' : 'red' }} key={index}>
                                <td >{item.log_date}</td>
                                <td>{item.hours}</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    })
                        : "Ruko sabar kro"}
                </table>
                </div>
                <button style={{ marginTop: '20px' }} onClick={closeModal}>close</button>
            </Modal>
        </div >
    )
}
export default Dashboard
