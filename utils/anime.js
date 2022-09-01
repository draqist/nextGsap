import gsap from 'gsap';

if (typeof window !== 'undefined') {
  var svgFilter = window?.document.querySelector('#svg-distortion-filter');
  var svgFilterTurbulence = svgFilter?.querySelector('feTurbulence');
  var svgFilterDisplacementMap = svgFilter?.querySelector('feDisplacementMap');
  var skews = window?.document.querySelector('skews');
  var skew = skews?.querySelectorAll('skew');

  var lastActiveItem = 0;

  console.log('You are on the browser');
} else {
  console.log('You are on the server');
}
const setActiveItem = (index) => {
  if (lastActiveItem === index) return true;

  skew?.forEach((el, i) => {
    el.classList.toggle('active', index === i); // set active nav item
  });

  makeDisplace();

  lastActiveItem = index;
};

const makeDisplace = () => {
  const tl = gsap.timeline();

  // Kill all previous tweens of displacement map
  gsap.killTweensOf(svgFilterDisplacementMap);

  // Set random seed of turbulence
  tl.set(
    svgFilterTurbulence,
    {
      attr: { seed: gsap.utils.random(2, 150) },
    },
    0,
  );

  // Scale displacement map to random value
  tl.to(
    svgFilterDisplacementMap,
    {
      attr: { scale: gsap.utils.random(80, 120) },
      duration: 0.2,
    },
    0,
  );

  // Scale back displacement map to initial value
  tl.to(
    svgFilterDisplacementMap,
    {
      attr: { scale: 1 },
      duration: 4,
      ease: 'expo.out',
    },
    0.2,
  );
};

export { setActiveItem, makeDisplace };
