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
          <button type="submit"><img src="./images/search.png" alt="" /></button>
         </form>
        </div>
        </div>
    )
}