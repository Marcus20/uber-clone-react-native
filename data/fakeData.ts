export type ScreenData = {
  id: string;
  title?: string;
  image?: string;
  screen?: string;
  icon?: string;
  location?: string;
  destination?: string;
}[];

export const actionData: ScreenData = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatScreen',
  },
];

export const personalData: ScreenData = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: '124',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
];
