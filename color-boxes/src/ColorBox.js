import { Component } from "react";
import Color from './Color';
import { Container, Row, Col} from "react-bootstrap";


class ColorBox extends Component {

static defaultProps = {
     colorArray:  ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
}

    constructor (props){
        super(props);
        this.state = {
            colorArray: this.props.colorArray
        }
        this.handleClick = this.handleClick.bind(this)
    }
    // rainbow(numOfSteps, step) {
    //     // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    //     // Adam Cole, 2011-Sept-14
    //     // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    //     var r, g, b;
    //     var h = step / numOfSteps;
    //     var i = ~~(h * 6);
    //     var f = h * 6 - i;
    //     var q = 1 - f;
    //     switch(i % 6){
    //         case 0: r = 1; g = f; b = 0; break;
    //         case 1: r = q; g = 1; b = 0; break;
    //         case 2: r = 0; g = 1; b = f; break;
    //         case 3: r = 0; g = q; b = 1; break;
    //         case 4: r = f; g = 0; b = 1; break;
    //         case 5: r = 1; g = 0; b = q; break;
    //     }
    //     var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    //     return (c);
    // }
   

    generateColors(){
        var randColor = this.state.colorArray[Math.floor(Math.random() * this.state.colorArray.length)];
        return randColor;
    }

    handleClick(){
        console.log(this.state)
        this.setState = {
            colorArray: this.generateColors()
        }
    }

    

    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                    </Row>
                    <Row>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                    </Row>
                    <Row>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                    </Row>
                    <Row>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                        <Col><Color handleClick={this.handleClick} color={this.generateColors()}/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default ColorBox;