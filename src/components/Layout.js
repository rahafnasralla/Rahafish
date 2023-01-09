import { Outlet } from 'react-router-dom';
import NavBar from './Navbar'
export default function Layout() {

    return (
            <div className="color w-100p vh-100p d-flex justify-content-center align-items-center ">
                <NavBar />
                <Outlet />
            </div>
    )
}