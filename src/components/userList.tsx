import { memo } from "react"


interface Props {
    name:string
    location:string
    email:string
}

function UserList(data:Props) {
    return (
        <>
            <div className='bg-gray-800 text-white p-5'>
                <p>Name :  {data.name}</p> <br/>
                <p>Email :  {data.email}</p> <br/>
                <p>Location :  {data.location}</p> <br/>
            </div>
        </>
    )
}

export default memo(UserList)