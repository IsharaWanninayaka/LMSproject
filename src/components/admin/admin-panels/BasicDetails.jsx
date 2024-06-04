import React, { useEffect, useState } from 'react';
import HeaderBar from '../admin-components/navigateBar/HeaderBar';
import "../admin-style/basicdetails.scss";
import axios from 'axios';
//import React from 'react';

//data fetch
const List = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:3001/users");
      //console.log(result.data);
      setUserData(result.data)
    } catch (err) {
      console.log("Something wrong");
    }
  }
  return (
    <div>
        <HeaderBar/>
 
      <div className='mt-8'>
        <div class="container">
          <h2>User Details</h2>
          <ul class="res-table">
            <li class="table-header">
              <div class="col tcol-1">User Id</div>
              <div class="col tcol-2">Name</div>
              <div class="col tcol-3">Email</div>
              <div class="col tcol-4">Mobile Number</div>
            </li>
            <tbody class="table-row">
              {
                  userData.map((user, i) => {
                     return (
                        <tr key={i}>
                        <td class="col col-1" >{i+1}</td>
                        <td class="col col-2" >{user.name}</td>
                        <td class="col col-3" >{user.email}</td>
                        <td class="col col-4" >{user.phone}</td>
                     </tr>
                   )
                  })
              }            
            </tbody>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default List;