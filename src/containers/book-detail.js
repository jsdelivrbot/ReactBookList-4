import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        return (
            <div>Book Detail!</div>
        );
    }
}

// takes as an argument the applications state
function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);