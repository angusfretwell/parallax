import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es6.array.from';

export function parallax(selector, options) {
  let lastPosition = -1;

  // Establish default settings
  const settings = Object.assign({
    speed: 0.15,
  }, options);

  let elems;

  switch (typeof selector) {
  case 'string':
    elems = Array.from(document.querySelectorAll(selector));
    break;
  case 'array':
    elems = selector;
    break;
  default:
    elems = [ selector ];
  }

  function updatePosition() {
    elems.forEach((elem) => {
      const offset = elem.getBoundingClientRect().top + lastPosition;
      const yPosition = Math.round((offset - lastPosition) * settings.speed);

      // Apply the y-axis transform
      elem.style.transform = `translate3d(0, ${yPosition * -1}px, 0)`; // eslint-disable-line
    });
  }

  function animate() {
    // If the offset position hasn't changed, skip this frame
    if (lastPosition === window.pageYOffset) {
      requestAnimationFrame(animate);
      return false;
    }

    // Save the new offset position
    lastPosition = window.pageYOffset;

    updatePosition();
    requestAnimationFrame(animate);
  }

  // Start the animation
  animate();
}
