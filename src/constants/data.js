import images from './images';

const wines = [
  {
    title: 'Coconut water',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Arnold Palmer',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Bubble tea',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Apple cider',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Shirley Temple',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Virgin colada',
    price: '$20',
    tags: 'Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: 'Virgin Mary[',
    price: '$16',
    tags: 'Dark| Ginger | Slice of lime',
  },
  {
    title: 'Freddie Bartholomew',
    price: '$10',
    tags: 'Citrus juice | Sugar',
  },
  {
    title: 'Lemon, lime and bitters',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Tortuga',
    price: '$26',
    tags: 'Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
