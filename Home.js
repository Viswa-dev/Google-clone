import React from 'react';
import styles from './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from './Search'

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                    
                </div>
                <div className="home_headerRight">
                <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                    
                    {/*Icon*/}
                    {/*Avatar   */}
                </div>
            </div>

            <div className="home_body">
                <img src="https://images-eu.ssl-images-amazon.com/images/I/41HeL2cy9LL.png" alt=""></img>
                <div className="home_inputContainer">
                  <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
