import React from 'react';

class ChildOne extends React.Component {
    someOtherFunction = () => {
        this.props.setMuteActive(!this.props.muteActive);
    }
}

export default ChildOne;