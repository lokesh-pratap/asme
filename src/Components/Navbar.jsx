import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/science">Science</Link></li>
            <li><Link to="/environment">Environment</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            
        </ul>
      
    </div>
  )
}

export default Navbar
