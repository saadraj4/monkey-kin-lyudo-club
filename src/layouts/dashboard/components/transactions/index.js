import React from 'react'
import SideNavbar from '../../../SideNavbar'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import TransactionList from './transactionsComponent'
import TransactionData from "./transactionsComponent/TransactionData"
function index() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SideNavbar />
            <TransactionList Transaction={TransactionData}/>
        </DashboardLayout>

    )
}

export default index