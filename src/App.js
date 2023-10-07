import React from 'react';

import WinXP from 'WinXP';
import { useGA } from 'hooks';

const App = () => {
  useGA('G-JW4QM3ZQ1B', 'winXP');
  return <WinXP />;
};

export default App;
