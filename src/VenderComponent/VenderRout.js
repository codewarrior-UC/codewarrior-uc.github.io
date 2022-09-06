import React from 'react'
import {Routes,Route} from 'react-router-dom'
// import OrderLists from '../Component/OrderLists'
import VenderOrderList from './Components/VenderOrderList'
import VenderMenu from './VenderMenu'
export default class App extends React.Component
{
  render()
  {
    return <div>
<VenderMenu/>
        <Routes>
        <Route path="/" element={<VenderOrderList/>}/>
        </Routes>
    </div>
  }
}
// import React from 'react'
// import Navbar from "../Nav/Navbar"
// import {Routes,Route} from 'react-router-dom'
// import EmpList from '../Component/EmpList'
// import EventList from '../Component/EventList'
// import OrderLists from '../Component/OrderLists'
// import ListEmployee from '../Component/ListEmployee'
// export default class App extends React.Component
// {
//   render()
//   {
//     return <div>
// <Navbar/>
//         <Routes>
//         <Route path="/" element={<OrderLists/>}/>
//           <Route path="/EmpList" element={<EmpList/>}/>
//           {/* <Route path="/PlaceOrder" element={<PlaceOrder/>}/> */}
//           <Route path="/EventList" element={<EventList/>}/>
//           <Route path="/ListEmployee" element={<ListEmployee/>}/>
//         </Routes>
//     </div>
//   }
// }