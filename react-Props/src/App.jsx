import React, {Component} from 'react';

import Parent from './PropParent.jsx';
import ChildOne from './PropChild.jsx';


class App extends Component {
  render() {
    return (
        <div>
          <Parent/>
        </div>
    );
  }
}


export default App;
