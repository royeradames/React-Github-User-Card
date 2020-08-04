import React, { Component } from 'react';
import styled from 'styled-components'

const Styles = styled.div`

`
class DisplayCards extends Component {

    render() {
        debugger
        return (
            <Styles>
                <h1>DisplayCards</h1>
                <div className='card-container'>
                    <div className='card-header'>
                        <img src={this.props.users.avatar_url} alt={`Avatar of ${this.props.users.name}`} />
                    </div>
                    <div className='card-body'>
                        <h2>{this.props.users.name}</h2>
                        <p>{this.props.users.bio}</p>
                    </div>
                    <div className='card-footer'>
                        <p>Total Public Repos: {this.props.users.public_repos}</p>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default DisplayCards;