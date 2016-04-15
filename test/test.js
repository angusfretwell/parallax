import 'should';
import jsdom from 'mocha-jsdom';
import Parallax from '../source';

describe('parallax', () => {
  jsdom();

  before(() => {
    window.requestAnimationFrame = (callback) => {
      window.setTimeout(() => {
        callback();
      }, 10);
    };
  });

  describe('constructor', () => {
    it('should consume a single dom element', () => {
      const elem = document.createElement('div');
      const p = new Parallax(elem);
      p.elems.length.should.equal(1);
      p.elems[0].nodeName.should.equal('DIV');
    });

    it('should consume an array of dom elements', () => {
      const elems = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
      ];

      const p = new Parallax(elems);
      p.elems.length.should.equal(3);
      p.elems[0].nodeName.should.equal('DIV');
    });

    it('should consume a selector', () => {
      const elem = document.createElement('div');
      elem.className = 'example';
      document.body.appendChild(elem);
      const p = new Parallax('.example');
      p.elems.length.should.equal(1);
      p.elems[0].nodeName.should.equal('DIV');
      p.elems[0].className.should.equal('example');
    });

    it('should have a default speed', () => {
      const p = new Parallax();
      p.settings.speed.should.equal(0.2);
    });

    it('should have a default speed', () => {
      const p = new Parallax(null, {
        speed: 0.3,
      });

      p.settings.speed.should.equal(0.3);
    });
  });

  describe('animate', () => {
    it('should update lastPosition', () => {
      const elem = document.createElement('div');
      const p = new Parallax(elem);
      p.lastPosition.should.equal(-1);
      p.animate();
      p.lastPosition.should.equal(0);
    });

    it('should update element\'s transform', () => {
      const elem = document.createElement('div');
      const p = new Parallax(elem);
      p.elems[0].style.should.not.have.keys('transform');
      p.animate();
      p.elems[0].style.transform.should.equal('translate3d(0, 0px, 0)');
    });

    it('should vendor prefix transform', () => {
      const elem = document.createElement('div');
      const p = new Parallax(elem, {
        prefix: true,
      });
      p.animate();
      p.elems[0].style.should.have.properties([
        'oTransform',
        'msTransform',
        'mozTransform',
        'webkitTransform',
      ]);
    });
  });
});
