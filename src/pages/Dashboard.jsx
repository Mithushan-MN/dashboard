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




//import React, { useEffect, useState } from 'react'
import '../styles/Dashboard.css'

//import axios from 'axios'



// function Dashboard(){
//   const [data,setData] = useState([])
//   useEffect(()=>{
//     axios.get("http://localhost:3000/users")
//     .then(res =>setData(res.data))
//     .catch(er =>console.log(er));
//   },[])
//   return (
//    <div className='dashboard'>
//     <table>
//       <tread>
//         <tr>
          
//           <th>DISPLAY NAME</th>
//           <th>EMAIL</th>
//           <th>USER TYPE</th>
//           <th>USER STATUS</th>
//         </tr>
//       </tread>
//       <tbody>
//         {
//           data.map((user,index) =>(
//             <tr key={index}>
//               <td>{user.NAME}</td>
//               <td>{user.EMAIL}</td>
//               <td>{user.USERTYPE}</td>
//               <td>{user.USERSTATUS}</td>
//             </tr>
//           ))
//         }
//       </tbody>
//     </table>
//    </div>
//   )
// }

// export default Dashboard

// App.js
import { useEffect, useState } from "react";
//import "./App.css";

function Dashboard() {
  const [data, setData] = useState([]);
  

  const fetchData = () => {
    
    fetch('db.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="filters">
        <div className='filter_left'>
          <h5 className='active__'>Active Users<i class="ri-arrow-down-s-line"></i></h5>
          <h5 className='deactive'><i class="ri-search-line"></i>Search Users</h5>
          <h5 className='active_middle'><i class="ri-filter-3-line"></i>Add filter</h5>
        </div>

        <div className="filter_right">
          <h5><i class="ri-add-line"></i>Add Users<i class="ri-arrow-down-s-line"></i></h5>
          <h5 className='deactive'><i class="ri-delete-bin-6-line"></i>Delete</h5>
          <h5 className='deactive'><i class="ri-key-2-line"></i>Reset password</h5>
        </div>
        
      </div>

      <div className='filter__button'>
        <button>user type: Member <i class="ri-close-line"></i></button>
        <button>status: active <i class="ri-close-line"></i></button>
        <h5>Clear Filter</h5>
      </div>


      <tbody>
        <tr>
          <th>DISPLAY NAME</th>
          <th>EMAIL</th>
          <th>USER TYPE</th>
          <th>USER STATUS</th>
          <th></th>
         
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.NAME}</td>
            <td>{item.EMAIL}</td>
            
            <td>{item.USERTYPE}</td>
            <td>{item.USERSTATUS}</td>
            <td>{item.USERST}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default Dashboard;
