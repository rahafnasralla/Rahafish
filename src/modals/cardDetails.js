import React from 'react'
export default function CardDetails({ fish }) {


    return (
        <div className='details'>
            <div className="img-wrapper ms-5 me-5">

            {fish["Image Gallery"] ?
                    <React.Fragment>
                    <img
                    src={fish?.["Image Gallery"][0]?.src}
                    alt={fish?.["Image Gallery"][0]?.alt}
                    className="details-img" />
                    </React.Fragment>
                    :
                    <React.Fragment>
                    <img
                    src={fish?.["Species Illustration Photo"]?.src}
                    alt={fish?.["Species Illustration Photo"]?.alt}
                    className="details-img" />
                    </React.Fragment>
                    }
            </div>

            <div className="details-desc mx-3">
                <h4>fishing region</h4>
                {fish?.["NOAA Fisheries Region"]}
            </div>
        </div>
    )
}