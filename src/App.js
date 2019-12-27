import React from 'react';
import Header from './Header';
import {Button} from '@blueprintjs/core';
import DataList from './DataList';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleReload = this.handleReload.bind(this);

    this.dataListRef = React.createRef();
  }

  handleReload(event) {
    this.dataListRef.current.reload();
  }

  render() {
    return (
      <div>
        <Header/>
  
        <div className="content-area">
          <Button small>追加</Button>
          <Button small onClick={this.handleReload}>再読込</Button>
          <DataList ref={this.dataListRef}/>
        </div>
      </div>
    );
  }
}

export default App;
