import React from 'react';

class Parent extends React.Component {
    setMusicActive = (muteActive) => {
        this.setState({ muteActive });
    }
<ChildOne muteActive={this.state.muteActive} setMusicActive={this.setMuteActive} />
<ChildTwo muteActive={this.state.muteActive} setMusicActive={this.setMuteActive} />
}

export default Parent;