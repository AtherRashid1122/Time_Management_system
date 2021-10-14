import { combineReducers } from "redux";

import Userreducer from "./Inputreducer";
import Dashboardreducer from "./Dashboard";

const rootreducer = combineReducers({
    Userreducer,
    Dashboardreducer,
})
export default rootreducer