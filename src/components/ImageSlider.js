// Bomb Component Code Goes Here
import React from "react";
class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return `I am on slide ${this.state.currentSlideIndex}`;
  }
}

export default ImageSlider;
