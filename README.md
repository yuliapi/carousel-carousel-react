# Carousel-carousel-react
Easy to use responsive slider component for React  designed for displaying images as animated slideshow.
Tested in last versions of Chrome, Safari, Firefox and Opera 

Check [live demo](http://yuliapi.github.io/projects/carousel/index.html?utm_source=github&utm_campaign=carousel)

## How to use
### Install 
````
npm install --save carousel-carousel-react
```` 
### Project structure
```
.
|-src
    |--images
        |--myImage-large.jpg
        |--myImage-small.jpg
    |--App.js
```
### Prepare images
To provide versions of an image for different display device scenarios this component use  HTML `<picture>` element in following way:

````
 <picture>
     <source media="(min-width: 480px)" srcSet="image-large.jpg"/>
     <img src="image-small.jpg" alt="image"/>
 </picture>
````
In current version component follows mandatory naming convention that requires `'-size_suffix.ext'`. 
We recommend to use following suffixes to name image files:
+ `image1_name-small.ext`
+ `image1_name-large.ext`

or 
+ `image1_name-normal.ext` to use one image version for all screen sizes. As prefix use any valid file name.

For instance, 
- `monkey.ext` is invalid because of missing suffix;
- `monkey-funny-size_suffix.ext` is valid;
- `monkey-funny.ext` is valid to , but you'll get incorrect **alt** attribute (`alt="monkey"`)

Supported formats **.jpg**, **.png**, **.jpeg**

Place all images in image folder which should be in the same directory with App.js file

### Usage

In App.js import component:
````
import Carousel from 'carousel-carousel-react';
```` 
include following code:
````
function importAll(r) {
    let images = {};
    r.keys().map((item) => {
        images[item.replace('./', '')] = r(item);
        return null;
    });
    return images;
}

const images = importAll(require.context('./images', false, /\.(jpg)$/));
````

and use Carousel as:
````
 <Carousel images={images}/>
```` 

