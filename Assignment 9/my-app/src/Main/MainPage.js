import React from "react";
import "./MainPage.css";
import {Link} from "react-router-dom"
export default function MainPage(){
    return(
        <div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/jobs'>Jobs</Link>
            </nav>
            <footer>
                <div style={{float:'left'}}>Abhishek Hegde</div>
            </footer>
        </div>
    )
}