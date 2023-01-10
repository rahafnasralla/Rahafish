import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

export default function Contact()  {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [messege,setMessege] = useState("")
    const form = useRef()

    const onNameChanged = (e) => {
          setName(e.target.value)
    }
    const onEmailChanged = (e) => {
          setEmail(e.target.value)
    }
    const onMessegeChanged = (e) => {
          setMessege(e.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ag4624f', 'template_7abuaq4',form.current, 'KqgX1tXbDUhbedth-')
        .then((result) => {
            setName("");
            setEmail("");
            setMessege("");
            console.log(result.text);
            console.log("messege sent");
        }, (error) => {
            console.log(error.text);
        });
    }

    return (

        <div>
        <div className="container mt-5">
        <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Contact Us</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form ref={form}>
                            <div className="mb-3">
                                <label className="form-label required">Name</label>
                                <input type="text" value={name} onChange={onNameChanged} name="name" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label required">Email</label>
                                <input type="email" value={email} onChange={onEmailChanged} name="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label required">Type ypur message here</label>
                                <textarea value={messege} onChange={onMessegeChanged} name="messege" className="form-control"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" onClick={sendEmail} className="btn btn-dark">Submit</button>
                        <button type="submit" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}