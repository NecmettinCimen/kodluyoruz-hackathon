import * as React from 'react';
import { Link } from 'react-router-dom';
import './Box.css';



const Box = () => (
   <div>
      <div className="card">
         <div className="card-header">
            <img src="https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="rover" />
         </div>
         <div className="card-body">
            <Link to='/'>
               <h4>Web Hackathon</h4>
            </Link>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, doloremque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, quasi.
           </p>
            <div className="date">
               
               <div className="date-info">
                  <small>21.12.2020</small>
               </div>
            </div>
         </div>
      </div>
   </div>

);

export default Box