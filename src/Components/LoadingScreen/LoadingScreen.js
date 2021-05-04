import React from "react";

import "./LoadingScreen.css";

class LoadingScreen extends React.Component {
  render() {
    return (
      <div
        className="loading-screen"
        style={this.props.isLoading ? { display: "flex" } : { display: "none" }}
      >
        <div className="loadingImage"></div>
      </div>
    );
  }
}

export default LoadingScreen;
