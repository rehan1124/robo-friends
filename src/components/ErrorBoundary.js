import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      const htmlContent = (
        <h1>
          Ooops. This is unexpected and not good. We are working to fix the
          issue.
        </h1>
      );
      return htmlContent;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
