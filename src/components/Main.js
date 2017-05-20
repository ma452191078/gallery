require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片资源
let imageDatas = [];
imageDatas = require('json-loader!../data/imageData.json');
//转换为图片URL
imageDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
})(imageDatas);

// 创建图片组件
var ImgFigure = React.createClass({
  render: function () {
    return (
      <figure>
        <img src={this.props.data.imageURL}
              alt={this.props.data.title}/>
        <figcaption>
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
});

class AppComponent extends React.Component {
  render() {

    var controllerUnits = [],
        imgFigures = [];
    imageDatas.forEach(function(value) {

      imgFigures.push(<ImgFigure data={value}/>);
    });

    return (
      <section className = "stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
