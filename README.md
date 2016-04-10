Parallax
========

[![Travis](https://img.shields.io/travis/angusfretwell/parallax.svg)](https://travis-ci.org/angusfretwell/parallax)
[![Code Climate](https://img.shields.io/codeclimate/github/angusfretwell/parallax.svg)](https://codeclimate.com/github/angusfretwell/parallax)
[![Codecov](https://img.shields.io/codecov/c/github/angusfretwell/parallax.svg)](https://codecov.io/github/angusfretwell/parallax)
[![NPM Version](http://img.shields.io/npm/v/parallax-scroll.svg)](https://www.npmjs.org/package/parallax-scroll)
[![NPM Downloads](https://img.shields.io/npm/dm/parallax-scroll.svg)](https://www.npmjs.org/package/parallax-scroll)

Straight-forward parallax scrolling background images as an ES6 module.

Features
--------

* Easily import as an ES6 module
* Plain old JavaScript; no jQuery
* Simple as heck and really tiny
* Looks pretty cool

Usage
-----

1. Install Parallax with npm:

  ```sh
  npm install --save parallax-scroll
  ```

2. Import the `parallax` function:

  ```js
  import Parallax from 'parallax-scroll';
  ```

  Alternatively, an old-school `require()` will work:

  ```js
  var Parallax = require('parallax-scroll');
  ```

3. Create a new instance of `Parallax`, passing the constructor a selector, DOM element, or array of DOM elements, and optionally a hash of options, and then call the `animate()` function on the resulting object:

  ```js
  const parallax = new Parallax('.js-parallax', {
    speed: 0.2, // Anything over 0.5 looks silly
  });

  parallax.animate();
  ```

4. Write some markup for your parallax elements:

  ```html
  <div class="o-banner">
    <div class="o-banner__img js-parallax" style="background-image: url(path/to/some/img.jpg);"></div>
  </div>
  ```

5. As well as some structural CSS:

  ```css
  .o-banner {
    /**
     * You'll likely want to set a height for the elements, perhaps based on the
     * viewport as in this example
     */
    min-height: 70vh;
    position: relative;
  }

    .o-banner__img {
      position: absolute;
      width: 100%;
      left: 0;

      /**
       * Adjust the height (or width), and offset the element's position based
       * on the aspect of your images
       */
      height: 110%;
      top: -5%;

      background-position: center top;
      background-repeat: no-repeat;
      background-size: cover;

      transform: translate3d(0, 0, 0);
    }
  ```
