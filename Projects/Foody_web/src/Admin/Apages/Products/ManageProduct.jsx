import React, { useEffect, useState } from 'react'
import AHeader from '../../AComman/AHeader'
import APageHeader from '../../AComman/APageHeader'
import axios from 'axios'

function ManageProduct() {

  const [product, setproduct] = useState([])

  useEffect(() => { getproduct() }, [])

  const getproduct = async () => {

    try {
      const respro = await axios.get("http://localhost:3000/products")
      // console.log(respro.data) 
      setproduct(respro.data)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <AHeader />
      <APageHeader name="Manage" title="Manage Product" />
      <div>
        {
          product && product.map((products, index) => {
            return (
              <ul>
                <li>{products.name}</li>
              </ul>)
          })
        }
      </div>

    </div>
  )
}

export default ManageProduct