import * as React from "react";
import BrandList from "./BrandList";
import ModelList from "./ModelList";
import YearList from "./YearList";
import Results from "./Results";
import { Global, MainContainer } from "./GenericComponents";

class HomeComponent extends React.Component {
  render() {
    
    return (
      <React.Fragment>
        <Global/>
        <MainContainer>
            <form>
              <div>
                <BrandList {...this.props}/>
                <ModelList {...this.props}/>
                <YearList {...this.props}/>
              </div>
              <Results {...this.props}/>
            </form>
        </MainContainer>
      </React.Fragment>
    );
  }
}






export default HomeComponent;
