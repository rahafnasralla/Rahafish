import { GlobalContext } from "../Utils/Context";
import { useContext } from "react";
export default function Home() {

    const context = useContext(GlobalContext);
    function onButtonClicked() {
        context.showModal();
    }

    return (
        <>

    <div className="color wh ">
          <section id="banner">
            <div className="container"> 
                <div className="row">
                    <div className="col-md-4">
                            <h1 className="b">A website that cares about you and your fish facsination</h1>
                            <pre>
                                
                            </pre>
                            <p className="i">
                            Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <button className="contact" onClick={onButtonClicked}>Contact US</button>
                    </div> 
                    <div className="col-md-4">
                    <img src="./images/fish.png" alt="" className="image-fluid"/>
                    </div>
                </div>

                <div className="row">
                    <img src="./images/wave1.png" alt=""  className="bottom-img"/>
                </div>
            </div>
          </section>
        </div>
        </>
    )
}