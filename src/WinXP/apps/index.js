import ErrorBox from './ErrorBox';
import Location from './Location';
import Blog from './Blog';
import Quotes from './Quotes';
// import winamplify from './winampify';
import Winamp from './Winamp';
import Domains from './Domains';
import error from 'assets/windowsIcons/897(16x16).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import music from 'assets/windowsIcons/music16.png';
import location from 'assets/windowsIcons/299(32x32).png';
import MyComputer from './MyComputer';
import computer from 'assets/windowsIcons/676(32x32).png';
import Resume from './Resume';
import resume from 'assets/windowsIcons/resume32.png';
import quotes from 'assets/windowsIcons/quotes32.png';
import domains from 'assets/windowsIcons/internet-folder-32x32.png';

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
      title: 'Food for Thought',
      icon: notepad,
    },
    defaultSize: {
      width: window.innerWidth * 0.75,
      height: window.innerHeight / 4,
    },
    defaultOffset: {
      x: window.innerWidth * 0.225,
      y: window.innerHeight * 0.125,
    },
    resizable: true,
    minimized: true,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Quotes,
    header: {
      title: 'Quotes',
      icon: quotes,
      noFooterWindow: true,
    },
    defaultSize: {
      width: window.innerWidth * 0.75,
      height: window.innerHeight / 4,
    },
    defaultOffset: {
      x: window.innerWidth * 0.225,
      y: window.innerHeight * 0.125,
    },
    resizable: true,
    minimized: true,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Domains,
    header: {
      title: 'Domains for Sale',
      icon: quotes,
      noFooterWindow: true,
    },
    defaultSize: {
      width: window.innerWidth * 0.75,
      height: window.innerHeight / 4,
    },
    defaultOffset: {
      x: window.innerWidth * 0.225,
      y: window.innerHeight * 0.125,
    },
    resizable: true,
    minimized: true,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Location,
    header: {
      title: 'Where Am I?',
      icon: location,
      noFooterWindow: true,
    },
    defaultSize: {
      width: window.innerWidth * 0.5,
      height: window.innerHeight / 8,
    },
    defaultOffset: {
      x: window.innerWidth * 0.25,
      y: window.innerHeight * 0.25,
    },
    resizable: true,
    minimized: true,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Winamp,
    header: {
      title: 'Playlist',
      icon: music,
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
    minimized: true,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: MyComputer,
    header: {
      title: 'My Computer',
      icon: computer,
      noFooterWindow: true,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth * 0.25,
      y: window.innerHeight * 0.25,
    },
    resizable: false,
    minimized: true,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: Resume,
    header: {
      title: 'Resume',
      icon: resume,
      noFooterWindow: true,
    },
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth * 0.25,
      y: window.innerHeight * 0.25,
    },
    resizable: false,
    minimized: true,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 4,
    icon: music,
    title: 'Playlist',
    component: Winamp,
    isFocus: false,
  },
  {
    id: 5,
    icon: domains,
    title: 'Domains for Sale',
    component: Domains,
    isFocus: false,
  },
  {
    id: 3,
    icon: notepadLarge,
    title: 'Food for Thought',
    component: Blog,
    isFocus: false,
  },
  {
    id: 1,
    icon: quotes,
    title: 'Cool Quotes',
    component: Quotes,
    isFocus: false,
  },
  {
    id: 2,
    icon: resume,
    title: 'Resume',
    component: Resume,
    isFocus: false,
  },
  {
    id: 0,
    icon: location,
    title: 'Where am I?',
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
      title: 'Food for Thought',
    },
    component: Blog,
    defaultSize: {
      width: window.innerWidth * 0.75,
      height: window.innerHeight / 4,
    },
    defaultOffset: {
      x: window.innerWidth * 0.225,
      y: window.innerHeight * 0.125,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Quotes: {
    header: {
      icon: quotes,
      title: 'Quotes',
    },
    component: Quotes,
    defaultSize: {
      width: window.innerWidth * 0.75,
      height: window.innerHeight / 4,
    },
    defaultOffset: {
      x: window.innerWidth * 0.225,
      y: window.innerHeight * 0.125,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Domains: {
    header: {
      icon: quotes,
      title: 'Domains',
    },
    component: Domains,
    defaultSize: {
      width: window.innerWidth * 0.75,
      height: window.innerHeight / 4,
    },
    defaultOffset: {
      x: window.innerWidth * 0.225,
      y: window.innerHeight * 0.125,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  MyComputer: {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: Blog,
    defaultSize: {
      width: window.innerWidth * 0.75,
      height: window.innerHeight / 4,
    },
    defaultOffset: {
      x: window.innerWidth * 0.225,
      y: window.innerHeight * 0.125,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Winamp: {
    header: {
      icon: music,
      title: 'UNTDL2',
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
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Location: {
    header: {
      icon: location,
      title: 'Where am I?',
    },
    component: Location,
    defaultSize: {
      width: window.innerWidth * 0.5,
      height: window.innerHeight / 8,
    },
    defaultOffset: {
      x: window.innerWidth * 0.25,
      y: window.innerHeight * 0.25,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  MyComputer: {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: MyComputer,
    defaultSize: {
      width: window.innerWidth / 3,
      height: window.innerHeight / 3,
    },
    defaultOffset: {
      x: window.innerWidth / 3,
      y: window.innerHeight / 43,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  InternetExplorer: {
    header: {
      icon: resume,
      title: 'Resume',
    },
    component: Resume,
    defaultSize: {
      width: window.innerWidth / 3,
      height: window.innerHeight / 3,
    },
    defaultOffset: {
      x: window.innerWidth / 3,
      y: window.innerHeight / 43,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
};

export {
  ErrorBox,
  Location,
  Blog,
  Winamp,
  MyComputer,
  Resume,
  Quotes,
  Domains,
};
