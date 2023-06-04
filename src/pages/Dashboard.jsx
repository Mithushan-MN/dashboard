// import axios from 'axios'
// import '../styles/Dashboard.css'

// import React,{ useEffect,useState,axios} from 'react'
// import DataTable from "react-data-table-component"


// const Dashboard = () => {

//   const column = [
//     {
//       name:"ID",
//       selector :row =>row.id
//     },
//     {
//       name:"Name",
//       selector :row =>row.name
//     },
//     {
//       name:"Email",
//       selector :row =>row.email
//     },
//     {
//       name:"City",
//       selector :row =>row.address.city
//     },
//   ]

//   useEffect(()=>{
//     const fetData = async ()=> {
//       axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res =>setRecords(res.data))
//       .catch(err => console.log(err));
//     }
//     fetData();
//   },[])

//   const [records, setRecords] = useState([])


//   return (
//     <div className='dashboard'>
//       <DataTable>
//         coloums={column}
//         data={records}
//       </DataTable>
//     </div>
//   )
// }

// export default Dashboard




import React, { useEffect, useState } from 'react'
import '../styles/Dashboard.css'
import axios from 'axios'



function Dashboard(){
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then(res =>setData(res.data))
    .catch(er =>console.log(er));
  },[])
  return (
   <div className='dashboard'>
    <table>
      <tread>
        <tr>
          <th>DISPLAY NAME</th>
          <th>EMAIL</th>
          <th>USER TYPE</th>
          <th>USER STATUS</th>
        </tr>
      </tread>
      <tbody>
        {
          data.map((user,index) =>(
            <tr key={index}>
              <td>{user.NAME}</td>
              <td>{user.EMAIL}</td>
              <td>{user.USERTYPE}</td>
              <td>{user.USERSTATUS}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
   </div>
  )
}

export default Dashboard
