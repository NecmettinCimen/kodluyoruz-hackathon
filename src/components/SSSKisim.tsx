import * as React from 'react';
import './SSSKisim.css';

class SSSKisim extends React.Component {
    state = {
        active: 0
    }
    setActive = (active: number) => {
        this.setState({ active })
    }
    classNamesButton = (index: number) => `accordion ${index == this.state.active ? 'active' : ''}`
    classNamesPanel = (index: number) => `panel ${index == this.state.active ? 'block' : 'none'}`
    render() {
        return (
            <div style={{ margin: 50 }}>
                <button className={this.classNamesButton(1)} onClick={()=>this.setActive(1)}>Section 1</button>
                <div className={this.classNamesPanel(1)}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <button className={this.classNamesButton(2)} onClick={()=>this.setActive(2)}>Section 2</button>
                <div className={this.classNamesPanel(2)}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <button className={this.classNamesButton(3)} onClick={()=>this.setActive(3)}>Section 3</button>
                <div className={this.classNamesPanel(3)}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        );
    }
}
export default SSSKisim;
