Parallax
========

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
  import { parallax } from 'parallax-scroll';
  ```

  Alternatively, an old-school `require()` will work:

  ```js
  var parallax = require('parallax-scroll').parallax;
  ```

3. Invoke `parallax` by passing the function a selector, and optionally a hash of options:

  ```js
  parallax('.js-parallax', {
    speed: 0.1, // Anything over 0.5 looks silly
  });
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
    }
  ```
