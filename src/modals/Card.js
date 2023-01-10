
export default function Card({title,body}) {

    return (

        <div className="modal fade" id="card" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1
                        className="modal-title fs-5"
                        id="exampleModalLabel">{title}</h1>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close" />
                </div>
                <div className="modal-body">{body}</div>
                <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                </div>
            </div>
        </div>
    </div>

  
    )

}