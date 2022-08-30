const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.065,
      delayChildren: 1,
    },
  },
};
const letter = {
  hidden: { opacity: 0.5, y: 50, },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const thourist =
  'THOURIST gives you an in-depth view into several popular sight and  tourist attractions in the world.Taking breath-taking shots of  spectacles around the globe, these gems have either been produced by the wonders of nature or by the intellect blessed upon man to craft these beautiful and memorable representations into existence.Ranging from islands, skyscrapers, ancient temples, Thourist gives you the full details on each and every place listed ';
const moreThourist = 'Providing you with both day and night-time images of the locations, to give you the true feeling of what being a native of these areas mean. '

export { thourist, sentence, letter, moreThourist };
