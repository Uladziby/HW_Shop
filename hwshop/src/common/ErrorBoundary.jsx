import React from "react";

const styles = {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    fontSize : 2+"rem"
}


export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <div style={{...styles}}>
            <h2>{this.state.error && this.state.error.toString()}</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      return this.props.children;
    }  
  }  