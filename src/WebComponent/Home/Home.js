import React from 'react'
import Navbar from "../Nav/Navbar"
import {Routes,Route} from 'react-router-dom'
import EmpList from '../Component/EmpList'
import OrderLists from '../Component/OrderLists'
import Events from '../Component/Events'
import Perks from '../Component/Perks'
// import PerksOfJoining from '../PerksOfJoiningFlair/PerksOfJoining'
export default class App extends React.Component
{
  render()
  {
    return <div>
       
<Navbar/>
        <Routes>
          <Route path="/" element={<EmpList/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/OrderLists" element={<OrderLists/>}/>
          <Route path="/Perks" element={<Perks/>}/>
        </Routes>
    </div>
  }
}