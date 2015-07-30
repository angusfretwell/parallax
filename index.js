import 'core-js/modules/es6.object.assign';

export function parallax(selector, options) {
  const windowHeight = window.height;

  // Establish default settings
  const settings = Object.assign({
    speed: 0.15,
  }, options);

  function updateBackgroundPosition(elem) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offset = elem.getBoundingClientRect().top + scrollTop;
    const height = elem.offsetHeight;

    // // Check if we're above or below the viewport
    if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
      return;
    }

    const yBgPosition = Math.round((offset - scrollTop) * settings.speed);

    // Apply the y-axis background position
    elem.style.backgroundPosition = `center ${yBgPosition * -1}px`;
  }

  const elems = Array.from(document.querySelectorAll(selector));

  // Iterate over each object in collection
  return elems.forEach((elem) => {
    // Create an event listener for scrolling
    document.addEventListener('scroll', () => {
      updateBackgroundPosition(elem);
    }, false);
  });
}
