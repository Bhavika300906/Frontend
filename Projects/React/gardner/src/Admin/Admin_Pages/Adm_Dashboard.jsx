import React from 'react'
import Admin_Header from '../Admin_Common/Admin_Header'
import Admin_Pages from '../Admin_Common/Admin_Pages'

function Adm_Dashboard() {
  return (
    <div>
      <Admin_Header/>
      <Admin_Pages title="Dashboard" data="Dashboard"/>
    </div>
  )
}

export default Adm_Dashboard
