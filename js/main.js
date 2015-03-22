/* @flow */

import React, { PropTypes } from 'react'
import StyleSheet from 'react-style'

let styles = StyleSheet.create({
    backgroundColor: 'black'
});

const App = React.createClass({
    render() {
        return (
            <div style={styles}>Hello World! </div>
        )
    }
})

React.renderComponent(<App />, document.body)
