import React, {useState} from 'react';
import '../Modal.css'; // .css file for Modal - Test run

const RegisterUsers = ({ closeModal, className }) => {    // prop: {style, closed} // testRun

    //const [close, setClose] = useState(false); // determine if modal is open or closed

    let modalStyles = {     // trial run
        //display: style.display, /* Hidden by default */
        position: "fixed", /* Stay in place */
        //border: "solid 20px white", // test run
        zIndex: "1", /* Sit on top */
        paddingTop: "100px", /* Location of the box */
        left: "0",
        top: "0",
        width: "100%", /* Full width */
        height: "100%", /* Full height */
        overflow: "auto", /* Enable scroll if needed */
        backgroundColor: "rgb(0,0,0)", /* Fallback color */
        backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */
     } 

     const modalContainer = {
        padding: "10px",
        margin: "auto",
        border: "solid 1px white",
        width: "35%",
        height: "400px",
        backgroundColor: "black"
     }

     const closeStyle = {
        margin: "0 0 0 85%",
        fontSize: "30px",
        //width: "100px",
        //height: "100px",
        aspectRatio: "auto",
        cursor: "pointer"
     }

    /* const closeModal = () => {
        setClose(true);     // trial run
       // modalStyles.display = "none";   // trial run
        if(close) {         // trial run
            console.log("Closing modal..."); // debugging statement
            closed = true;
            //modalStyles.display = "none";
           // modalStyles.display = "none"
           style.display = "none"  // Next time with code: add a property within that determines if open or closed modal...
        }
     } */
 
    return (
        <div className="registeredUsers" > {/* Trial run style={style} original: registeredUsers */}
            
            <div className={className} style={modalStyles}> {/* className="modal" style={modalStyles} */}
            <div className="modal-container" style={modalContainer}>
                <span className="close" style={closeStyle} onClick={closeModal}>&times;</span>
                <h2> Login: </h2><br/>
                <input className="user" placeholder="Email Address" /><br/><br/>
                <input className="password" placeholder="Password" /> <br/><br/>
                <button className="submit-btn"> Submit </button><br/>
                <p> New here? Click here to sign up</p>
            </div>
            </div>
        </div>
    );

}

export default RegisterUsers;