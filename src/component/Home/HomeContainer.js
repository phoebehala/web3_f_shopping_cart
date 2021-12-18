import React from 'react';
import { connect } from 'react-redux'
import Home from './HomeComponent';


const mapStateToProps = (state) => ({
    homeProps: state.myShop
})

const HomeContainer = connect(mapStateToProps)(Home)

export default HomeContainer