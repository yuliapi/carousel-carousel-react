import React, { Component } from 'react';
import Slide from '../elements/slide/Slide';
import Control from '../elements/controls/Control';
import Progress from '../elements/controls/Progress';

import './carousel.css';


export default class Carousel extends Component {

  constructor(props) {
    super(props);
    let images = Carousel.prepareImages(this.props.images);

    this.state = {
      id: 'myCarousel',
      currentActive: 0,
      images: images,
      total: images.length
    };
  }

  changeSlide = (currentActiveNumber) => {
    this.setState({ currentActive: currentActiveNumber });
  };

  static prepareImages(images) {
    let names = Object.keys(images);
    let obj = {};
    for (let i = 0; i < names.length; i++) {
      let result = Carousel.extractPrefix(names[i]);
      let prefix = result[1];
      let s = { "alt": prefix };
      s[result[2]] = images[names[i]];

      if (obj.hasOwnProperty(prefix) === true) {
        let newEntry = Object.assign({}, obj[prefix], s);
        obj[prefix] = newEntry;
      } else {
        obj[prefix] = s;
      }
    }
    let imageData = Object.values(obj);
    imageData.map((entry) => {
      if (entry.hasOwnProperty('small') === false) {
        entry.small = entry.large;
      }
      if (entry.hasOwnProperty('large') === false) {
        entry.large = entry.small;
      }
    });

    return imageData;

  }

  static extractPrefix(imageName) {
    return imageName.match(/(.*)-(\w+).(jpg|png|jpeg)$/);
  }


  render() {

    return (

      <div id={this.state.id} className='carousel'>
        <div className='carousel-body'>
          {this.state.images.map((image, index) => <Slide key={index} index={index} title={image.alt}
                                                          small={image.small}
                                                          large={image.large}
                                                          currentSlide={this.state.currentActive}/>)}
        </div>
        <div className='carousel-controls'>
          <Control direction='previous' controls={this.state.id}
                   totalSlides={this.state.total} currentSlide={this.state.currentActive}
                   handleClick={this.changeSlide}/>

          <Control direction='next' controls={this.state.id}
                   totalSlides={this.state.total} currentSlide={this.state.currentActive}
                   handleClick={this.changeSlide}/>
        </div>
        <div className='carousel-progress'>
          <Progress data={this.state} count={this.state.total}
                    handleClick={this.changeSlide}/>
        </div>
      </div>
    );
  }
}

