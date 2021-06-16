import { Component } from "react";
import './Footer.css';

class Footer extends Component {
    render(){
        return (<div className="copyright">
            <p className="old">Crafted by a <i className="fas fa-user-ninja fa-2x"></i><a className="copyright" href="http://www.mycodedojo.com"> © 2021 MyCodeDojo</a></p>
            </div>
        )
    }
}

export default Footer;