import React, { Component } from "react";
import Api from "./API";

const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weathers: [],
      selectedweather: null
    };
  }
  onSelect = selectedweather => {
    this.setState({ selectedweather });
  };

  componentDidMount() {
    Api.getweathers().then(weathers => this.setState({ weathers }));
  }

  onClose = () => {
    this.setState({ selectedweather: null });
  };

  render() {
    return (
      <Provider
        value={{
          weathers: this.state.weathers,
          selectedweather: this.state.selectedweather,
          onSelect: this.onSelect,
          onClose: this.onClose
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ContextProvider, Consumer as WeatherConsumer };
