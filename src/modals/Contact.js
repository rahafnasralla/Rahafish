export default function Contact()  {

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
                        <form>
                            <div className="mb-3">
                                <label className="form-label required">Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label required">Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label required">Type ypur message here</label>
                                <textarea className="form-control"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-dark">Submit</button>
                        <button type="submit" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}