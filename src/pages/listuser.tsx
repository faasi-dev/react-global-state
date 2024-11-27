import React from 'react'
import userStore from '../store/userStore'
import UserList from '../components/userList'

function ListUser() {

    const { userData } = userStore()

    console.log(userData)

    return (
        <>
            <div>ListUser</div>

            <div className=" grid grid-cols-3 gap-5">
            {userData?.map((item:any)=><UserList name={item?.name} location={item?.location} email={item?.email} />)}
            </div>

           
        </>
    )
}

export default ListUser