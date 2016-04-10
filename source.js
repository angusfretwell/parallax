import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es6.array.from';

export default class Parallax {
  constructor(selector, options) {
    this.lastPosition = -1;

    // Establish default settings
    this.settings = Object.assign({
      speed: 0.2,
    }, options);

    if (typeof selector === 'string') {
      this.elems = Array.from(document.querySelectorAll(selector));
    } else if (Array.isArray(selector)) {
      this.elems = selector;
    } else {
      this.elems = [selector];
    }
  }

  updatePosition() {
    this.elems.forEach((elem) => {
      const offset = elem.getBoundingClientRect().top + this.lastPosition;
      const yPosition = Math.round((offset - this.lastPosition) * this.settings.speed);

      // Apply the y-axis transform
      elem.style.transform = `translate3d(0, ${yPosition * -1}px, 0)`; // eslint-disable-line
    });
  }

  animate() {
    // If the offset position hasn't changed, skip this frame
    if (this.lastPosition === window.pageYOffset) {
      window.requestAnimationFrame(() => {
        this.animate();
      });

      return false;
    }

    // Save the new offset position
    this.lastPosition = window.pageYOffset;

    this.updatePosition();

    return window.requestAnimationFrame(() => {
      this.animate();
    });
  }
}
