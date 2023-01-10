import { Outlet } from 'react-router-dom';
import NavBar from './Navbar'
import {useRef,useEffect,useState} from 'react';
import Contact from "../modals/Contact";
import { Modal } from 'bootstrap';
import { GlobalContext } from '../Utils/Context';
import Card from '../modals/Card';

export default function Layout() {

    const [modalData, setModalData] = useState({
        body: "",
        title: ""
    });

    const modal = useRef()
    const card = useRef()
    useEffect(() => {
        modal.current = new Modal('#myModal')
        card.current = new Modal('#card')
    }, [])

    const showModal = () => {
        modal.current.show()
    }

    const showCard = (details) => {
        setModalData({
            body: details.body,
            title: details.title
        })
        card.current.show()
    }


    return (
            <GlobalContext.Provider value={{showModal,showCard}}>
            <div className="color w-100p vh-100p d-flex justify-content-center align-items-center ">
                <Contact/>
                <Card
                    title={modalData?.title}
                    body={modalData?.body}/>
                <NavBar />
                <Outlet />
            </div>
            </GlobalContext.Provider>
    )
}