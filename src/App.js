import React from 'react';
import Header from './Header';
import {Text} from '@blueprintjs/core';

import './App.css';

function App() {
  return (
    <div>
      <Header/>

      <div className="content-area">
        <Text>メインコンテンツ</Text>
      </div>
    </div>
  );
}

export default App;
