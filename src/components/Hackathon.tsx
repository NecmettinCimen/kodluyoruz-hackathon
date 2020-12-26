import * as React from 'react';
import './Box.css';

const Hackathon = () => (
    <div>
        <div/>
        <h1 style={{ textAlign: 'center' }}>Başvuru Süreci Devam Eden Hackathonlar</h1>
        <div style={{ height: 100 }} />
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box />
        </div>
    </div>
);

const Box = () => (
    <div>
        <div className="card">
    <div className="card-header">
      <img src="https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="rover" />
    </div>
    <div className="card-body">
      {/* <span className="tag tag-teal">Technology</span> */}
      <h4>
        Web Hackathon
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, doloremque.
      </p>
      <div className="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div className="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
    </div>
)

export default Hackathon