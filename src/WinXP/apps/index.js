import ErrorBox from './ErrorBox';
import Location from './Location';
import Blog from './Blog';
// import winamplify from './winampify';
import Winamp from './Winamp';
import error from 'assets/windowsIcons/897(16x16).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/690(16x16).png';
import location from 'assets/windowsIcons/299(32x32).png';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [
  {
    component: Blog,
    header: {
      title: 'Blog',
      icon: notepad,
    },
    defaultSize: {
      width: window.innerWidth * 0.75,
      height: window.innerHeight / 4,
    },
    defaultOffset: {
      x: window.innerWidth / 5,
      y: window.innerHeight / 8,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Location,
    header: {
      title: 'Where Am I?',
      icon: location,
    },
    defaultSize: {
      width: window.innerWidth * 0.5,
      height: window.innerHeight / 8,
    },
    defaultOffset: {
      x: window.innerWidth / 5,
      y: window.innerHeight / 8,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
    Text: 'Houston,TX',
  },
  {
    component: Winamp,
    header: {
      title: 'Winamp',
      icon: winamp,
      invisible: true,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth * 0.15,
      y: window.innerHeight * 0.15,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 4,
    icon: winamp,
    title: 'Music',
    component: Winamp,
    isFocus: false,
  },
  {
    id: 3,
    icon: notepadLarge,
    title: 'Blog',
    component: Location,
    isFocus: false,
  },
  {
    id: 5,
    icon: location,
    title: 'Location',
    component: Location,
    isFocus: false,
  },
];

export const appSettings = {
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Blog: {
    header: {
      icon: notepad,
      title: 'Blog',
    },
    component: Blog,
    defaultSize: {
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
    },
    defaultOffset: {
      x: window.innerWidth / 4,
      y: window.innerHeight / 4,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Winamp: {
    header: {
      icon: winamp,
      title: 'Music',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth * 0.15,
      y: window.innerHeight * 0.15,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Location: {
    header: {
      icon: location,
      title: 'Blog',
    },
    component: Location,
    defaultSize: {
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
    },
    defaultOffset: {
      x: window.innerWidth / 2,
      y: 0,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
};

export { ErrorBox, Location, Blog, Winamp };
