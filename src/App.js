import React from 'react'
import Menu from './Menu'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import EmployeeList from './EmployeeList'
import EmployeerList from './EmployeerList'
import AdminList from "./AdminList"
import Home from "./WebComponent/Home/Home"
import Employee from './Employee'
import Navbar from './WebComponent/Nav/Navbar'
import Employer from './Employer'
import CreateAdmin from "./services/CreateAdmin"
import Vender from './Vender'
import VendersList from './VendersList'
import Findjoin from './Findjoin'
import Orderlist from './Orderlist'
import PlaceOrder from './PlaceOrder'
import CompanyList from './CompanyList'
import PerksOfJoining from './PerksOfJoiningFlair/PerksOfJoining'
import Orderassing from './Orderassign'
import OrderStatus from './OrderStatus'
import CVupload from './CVupload'
import EmpDetail from './EmpDetail'
import DdlvenderList from './DdlvenderList'
import ChangeStatus from './ChangeStatus'
import EmpList from './WebComponent/Component/EventList'
import EventList from './WebComponent/Component/EventList'
import OrderLists from './WebComponent/Component/OrderLists'
import VedList from './WebComponent/Component/VedList'

import VenderOrderList from './VenderComponent/Components/VenderOrderList'
import VenderRout from './VenderComponent/VenderRout'
import VenderMenu from './VenderComponent/VenderMenu'
import Perks from './WebComponent/Component/Perks'
import Events from './WebComponent/Component/Events'
import Pagination from './Pagination'

export default class App extends React.Component


{

constructor(){
  super()
  this.state=[{
    loginstatus:false,
  }]
}

  render()
  {
    return <div>

      {/*  */}

{ this.state.loginstatus === true ? <Menu/> : "" }


        <Routes>
    
          <Route path="/" element={<Login/>}/>
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="/Employer" element={<Employer/>}/>
          <Route path="/EmployeerList" element={<EmployeerList/>}/>
          <Route path="/AdminList" element={<AdminList/>}/>
          <Route path="/CreateAdmin" element={<CreateAdmin/>}/>
          <Route path="/EmployeeList" element={<EmployeeList/>}/>
          <Route path="/VendersList" element={<VendersList/>}/>
          <Route path="/Vender" element={<Vender/>}/>
          <Route path="/Findjoin" element={<Findjoin/>}/>
          <Route path="/Orderlist" element={<Orderlist/>}/>
          <Route path="/Orderassing" element={<Orderassing/>}/>
          <Route path="/OrderStatus" element={<OrderStatus/>}/>
          <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
          <Route path="/CompanyList" element={<CompanyList/>}/>
          <Route path="/CVupload" element={<CVupload/>}/>
          <Route path="/EmpDetail" element={<EmpDetail/>}/>
          <Route path="/PerksOfJoining" element={<PerksOfJoining/>}/>
          <Route path="/ChangeStatus" element={<ChangeStatus/>}/>
          <Route path="/Pagination" element={<Pagination/>}/>

          
          <Route path="/VenderOrderList" element={<VenderOrderList/>}/>
          <Route path="/VenderRout" element={<VenderRout/>}/>
          <Route path="/VenderMenu" element={<VenderMenu/>}/>
          <Route path="/Perks" element={<Perks/>}/>

          <Route path="/Events" element={<Events/>}/>

x
          <Route path="/DdlvenderList" element={<DdlvenderList/>}/>

{/*           
          <Route path="/Login" element={<Login/>}/> */}

{/* Employer Menu */}

          <Route path="/Home" element={<Home/>}/>
          <Route path="/Navbar" element={<Navbar/>}/>

          
          <Route path="/EmpList" element={<EmpList/>}/>
          <Route path="/EventList" element={<EventList/>}/>
          <Route path="/OrderLists" element={<OrderLists/>}/>
          <Route path="/VedList" element={<VedList/>}/>

        </Routes>

  
    </div>
  }
}
