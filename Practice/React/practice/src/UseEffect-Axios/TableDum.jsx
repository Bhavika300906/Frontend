import axios from "axios";
import React, { useEffect, useState } from "react";

function TableDum() {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetchTableData()
  }, [])

  const fetchTableData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users")
      console.log(res.data.users)
      setTableData(res.data.users)

    } catch (error) {
      console.log("Api data not found")

    }

  }

  return (
    <div>
      <h1>Table Dummy Component</h1>
      <div className="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData && tableData.map((tableData, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{tableData.id}</th>
                    <td>{tableData.firstName}</td>
                    <td>{tableData.email}</td>
                    <td>{tableData.address.city}</td>
                    <td>{tableData.company.name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>

    </div >
  )
}

export default TableDum
