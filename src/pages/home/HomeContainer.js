import * as React from "react";

class HomeContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;


    return <ViewComponent {...this.props} />;
  }
}

export default HomeContainer;
