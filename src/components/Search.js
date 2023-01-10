import { useState } from "react"
export default function Search() {
    const [searchText,setSearchText] = useState("")
    function onSearchTextChanged(e) {
        setSearchText(e.target.value)   
    }
    return(
        <div>
        <div className="wrapper">
        <form action="" className="search-bar">
         <input type="text" placeholder="search fish..." name='q'
          value={searchText}
          onChange={onSearchTextChanged} />
          <a type="submit" href={`https://www.fishwatch.gov/profiles/${searchText.toLowerCase().replace(/\s/g, '-')}`}><img src="./images/search.png" alt="" /></a>
          
         </form>
        </div>
        </div>
    ) 
} 