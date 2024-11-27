import { memo } from "react"
import { Link, NavLink } from "react-router"

function Header() {
  return (
    <ul className=" w-full  bg-slate-800 flex justify-center items-center py-4 text-white font-bold gap-3">
        <li className="text-white"><NavLink to="/"> list user</NavLink> </li>
        <li><NavLink to="/create">create user </NavLink> </li>
    </ul>
  )
}

export default memo(Header)