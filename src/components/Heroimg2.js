import React , {Component} from 'react';
import Abouticon from './Abouticon';
import "./Heroimg2Styles.css";

class Heroimg2 extends Component {
    render(){
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                    <icon>{this.props.icon}</icon>
                </div>
                </div>
          );
    }
}

export default Heroimg2