import React, {Component} from 'react';
import './slide.css'
import Content from './Slide-content'

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.data= {
            alt: this.props.text,
            large: this.props.large,
            small: this.props.small
        };
    }

    render() {
       const{currentSlide, index} = this.props;
        let classToAdd;
        if (index === currentSlide) {
            classToAdd = 'active'
        }
        if (index > currentSlide) {
            classToAdd = 'slide-right';
            if (index === currentSlide + 1) {
                classToAdd = `${classToAdd} next`
            }
        }
        if (index < currentSlide) {
            classToAdd = 'slide-left';
            if (index === currentSlide - 1) {
                classToAdd = `${classToAdd} previous`
            }
        }

        return (
            <div className={`slide-content slide ${classToAdd}`}>
                <Content data={this.data}/>
            </div>

        )
    }
}

