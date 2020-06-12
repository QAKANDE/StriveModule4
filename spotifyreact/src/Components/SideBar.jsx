import React from 'react';
import {Link} from 'react-router-dom'
import './sidebar.css'
class Sidebar extends React.Component {
    render() { 
        return ( 
            <div>
        <div className="sidebar-header mt-2 mx-2">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="logo"/>
        </div>
                <ul className="sidebar-list mt-5">
                <li>
                     <a href="../ArtistPageResponsive.html"><i className="fa fa-home"></i> Home</a>
                </li>
               
                <li>
                    <a href="#"><i className="fa fa-search"></i> Search</a>
                </li>
                <li>
                    <a href="../Album.html"><i className="fas fa-stream"></i> Your Library</a>
                </li>
                </ul>
                <id className="footerSB">
                <div className="row">
                  <div className="col">
                    <div className="sideBarBottomBtn d-flex flex-column">
                      <button type="button" onclick="signup()" className="btn btn-primary btn-signUp bttn mx-4">SIGN UP</button>
                      <button type="button" className="btn btn-primary btn-login bttn mt-3 mx-4">LOG IN</button>
                    </div>
                    <div className="sideBarBottomAnchor d-flex flex-column">
                        <span className="mx-4"><a href="#" >Cookie</a> || <a href="#">Privacy policy</a></span> 
                    </div>
                  </div>
                </div>
            </id>
            </div>
         );
    }
}
 
export default Sidebar;