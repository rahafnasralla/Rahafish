import { FetchData } from "../Utils/ApiUtils";
import React, {useEffect, useState} from 'react';
import Search from "../components/Search";
export default function Fish() {
    
    const [fish, setFish] = useState([])


    
    const url = 'https://www.fishwatch.gov/api/species'

    useEffect(() => {
        getFish();
    }, [url])

    async function getFish() {
        let resp = ''
        resp = await FetchData(url, 'GET');
        if (resp.status === 200) {
                setFish(resp.data)
                console.log(resp.data)
                console.log(fish)
        } else {
            console.warn("sorry this api failed");
        }

    }


    return(

        <div>
        <Search/>
        <div className="row ms-5 me-5">
                {fish?.map((item, idx) => {
                    if(idx>=0&&idx<=35)
                    return (
                        <div className="col-lg-2 col-md-3" key={idx}>
                        <div className="card">
                        <img src={item?.["Species Illustration Photo"]?.src} alt={item?.["Species Illustration Photo"]?.alt}/>
                        <h5 title={item?.["Species Name"]}>{item?.["Species Name"]}</h5>
                        <h6 title={item?.["Serving Weight"]}>{item?.["Serving Weight"]}</h6>
                        <h6 title={item?.["Calories"]}>{item?.["Calories"]}</h6>
                        </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}