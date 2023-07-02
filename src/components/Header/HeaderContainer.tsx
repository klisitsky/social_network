import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


// const HeaderContainer = () => {
//
//   return <StoreContext.Consumer>
//     {(store) => <Header mainLogo={store.getState().profilePage.mainLogoSite}/>}
//   </StoreContext.Consumer>
// }

export type StatePropsType = {
  mainLogo: string
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    mainLogo: state.profilePage.mainLogoSite,
  }
}

const HeaderContainer = connect(mapStateToProps)(Header)

export default React.memo(HeaderContainer)