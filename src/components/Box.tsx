import * as React from 'react';
import { Link } from 'react-router-dom';
import './Box.css';



const Box = (title:string,context:string,date:string) => (
   <div>
      <div className="card">
         <Link to='/'>
            <div className="card-header">
               <img src="https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="rover" />
            </div>
         </Link>
         <div className="card-body">
            <Link to='/'>
               <h4>{title}</h4>
            </Link>
            <p>
              {context}
           </p>
            <div className="date">
               
               <div className="date-info">
                  <small>{date}</small>
               </div>
            </div>
         </div>
      </div>
   </div>

);

export default Box