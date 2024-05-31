import React from 'react'
import HeaderBar from '../admin-components/navigateBar/HeaderBar'
import "../admin-style/basicdetails.scss"

function BasicDetails() {
  return (
    <div>
        <HeaderBar/>
 
      <div className='mt-8'>
        <div class="container">
          <h2>User Details</h2>
          <ul class="res-table">
            <li class="table-header">
              <div class="col col-1">User Id</div>
              <div class="col col-2">Name</div>
              <div class="col col-3">Email</div>
              <div class="col col-4">Mobile Number</div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="User Id">0001</div>
              <div class="col col-2" data-label="User Name">chalith</div>
              <div class="col col-3" data-label="User Email">chalith@gmail.com</div>
              <div class="col col-4" data-label="Mobile Number">077 8663845</div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="Job User">   0002  </div>
              <div class="col col-2" data-label="User Name">     </div>
              <div class="col col-3" data-label="User Email">    </div>
              <div class="col col-4" data-label="Mobile Number">    </div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="User Id">    0003 </div>
              <div class="col col-2" data-label="User Name">    </div>
              <div class="col col-3" data-label="User Email">    </div>
              <div class="col col-4" data-label="Mobile Number">   </div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="User Id">     </div>
              <div class="col col-2" data-label="User Name">     </div>
              <div class="col col-3" data-label="User Email">      </div>
              <div class="col col-4" data-label="Mobile Number">      </div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="User Id">     </div>
              <div class="col col-2" data-label="User Name">     </div>
              <div class="col col-3" data-label="User Email">      </div>
              <div class="col col-4" data-label="Mobile Number">      </div>
            </li>
          </ul>
        </div>
      </div>
    </div>


  )
}

export default BasicDetails