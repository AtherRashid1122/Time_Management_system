import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Updateduserlog, Updatedadminuserlog } from '../../../Redux/Action/Dashboardaction'
import Button from '@mui/material/Button';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

import './style.css'
const Worklog = () => {


    const check = localStorage.getItem('logindatais') ? JSON.parse(localStorage.getItem('logindatais')) : null
    const token1 = check ? check.data.token : ''
    const role = check ? check.data.user.roles[0].name : ''
    const loginidget = check ? check.data.user.id : ''
    const loginid = useSelector(state => state.Userreducer.loginid)
    // console.log("loginid is ", loginid)
    // const token = useSelector(state => state.Userreducer.token)
    const dispatch = useDispatch()
    const [worklog, setworklog] = useState([])
    // console.log("data is ",worklog)
    const [id, setid] = useState()
    const [logdate, setlogdate] = useState()
    const [loghours, setloghours] = useState()
    const [logdesc, setlogdesc] = useState()
    const [logid, setlogid] = useState()
    const [userid, setuserid] = useState()
    const [workinglogs, setworkinglogs] = useState()
    const [handleedit, sethanldeedit] = useState(false)
    const adminwroklog = useSelector(state => state.Dashboardreducer?.adminworklog)
    const worklogall = useSelector(state => state.Dashboardreducer?.worklog)

    const [filterdata, setfilterdata] = useState()

    useEffect(() => {
        //   setworklog(worklogall.workLogs.data)
        setworklog(adminwroklog.data)
        setfilterdata(adminwroklog.data)
        // setfilterdata(res)


    }, [worklog])

    // const showuser = async () => {
    //     const res = await dispatch(Showalluser({ token: token1 }))
    //     setuserdata(res.data.users.data)
    //     setfilterdata(res.data.users.data)
    //     settoggle(true)
    //     sethanldeedit(false)
    //     setshowbutton(false)
    //     // localStorage.clear()
    //     if (res.status) {
    //         console.log("correct")
    //     }
    //     else {
    //         console.log("Incorrect")
    //     }
    // }


    const Updateuser = async () => {
        const res = await dispatch(Updatedadminuserlog({ logdate: logdate, loghours: loghours, logdesc: logdesc, token: token1, id: userid, logid: logid }))
        setworklog(res)
        setfilterdata(res)
        sethanldeedit(false)

    }



    const showUpdateuser = async () => {
        const res = await dispatch(Updatedadminuserlog({ logdate: logdate, loghours: loghours, logdesc: logdesc, token: token1, id: userid, logid: logid }))
        setworklog(res)
        setfilterdata(res)
        sethanldeedit(false)

    }

    const handleEdit = (item, index) => {
        // setstore(index)
        setuserid(item.user_id)
        setlogid(item.id)
        setloghours(item.hours)
        setlogdesc(item.description)
        setlogdate(item.log_date)
        sethanldeedit(true)
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

    const handleid = (e) => {
        setid(e.target.value)
    }
    return (
        <div>

            <div className="Manager">
                <h1>
                    admin
                </h1>
            </div>
            < div >
                {
                    handleedit ?
                        <div>
                            {/* < input value={id} onChange={handleid} placeholder="ID" /> */}
                            <input value={logdate || ''} onChange={handlelogdate} placeholder="Enter Log Date" />
                            <input value={loghours || ''} onChange={handlelohhours} placeholder="Enter Log Hours" />
                            <input value={logdesc || ''} onChange={handlelogdesc} placeholder="Enter Log Description" />
                            <Button style={{ margin: '5px' }} onClick={Updateuser} variant="contained">  update user</Button>

                        </div> : null
                }
                {filterdata?.length > 0 ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <h4 >"{adminwroklog?.data[0]?.user?.firstName}  {adminwroklog?.data[0]?.user?.lastName}" Preffered Working Hours </h4>
                        {adminwroklog?.data[0]?.user?.working_hours ?
                            <h4 style={{ color: 'white', background: 'red', width: '50px', marginLeft: '20px', fontSize: '30px' }}>
                                {adminwroklog?.data[0]?.user?.working_hours}
                            </h4> : <h4 style={{ color: 'white', background: 'red', width: '90px', marginLeft: '20px', fontSize: '30px' }}>
                                Null</h4>}
                    </div> : 'No Work Logs Found'}
                {filterdata?.length > 0 ? <div style={{ display: 'flex', marginBottom: '40px' }}>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Worklogdate</th>
                                <th>working hours</th>
                                <th> Description</th>
                                <th>Edit</th>

                            </tr>
                        </thead>
                        {filterdata ? filterdata.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr style={{ backgroundColor: item.hours >= item.user.working_hours ? 'green' : 'red' }} key={index} >
                                        <td style={{ color: 'white' }}>{item.log_date}</td>
                                        <td style={{ color: 'white' }}>{item.hours}</td>
                                        <td style={{ color: 'white' }}>{item.description}</td>
                                        <td onClick={() => handleEdit(item, index)} className="buttonstyle">Edit</td>
                                        {/* <td onClick={() => Delete(item.id)} className="buttonstyle">Delete</td>  */}
                                    </tr>
                                </tbody>
                            )
                        })
                            : "Ruko sabar kro"}
                    </table>
                </div> : null}
            </div >
        </div >
    )
}

export default Worklog
