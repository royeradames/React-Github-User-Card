import React, { Component } from 'react';
import styled from 'styled-components'

const Styles = styled.div`
    .ui.card{
        margin: 1em 0;
        max-width: 100%;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 290px;
        min-height: 0;
        background: #fff;
        padding: 0;
        border: none;
        border-radius: .28571429rem;
        -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
        -webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
        transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
        transition: box-shadow .1s ease,transform .1s ease;
        transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
        z-index: '';
        :last-child{
            margin-bottom: 0;
        }
        :first-child{
            margin-top: 0;
        }

        .img{
            position: relative;
            display: block;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            padding: 0;
            background: rgba(0,0,0,.05);
            
            img{
                display: block;
                width: 100%;
                height: auto;
                border-radius: inherit;
            }
        }

        .content{
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            border: none;
            border-top: 1px solid rgba(34,36,38,.1);
            background: 0 0;
            margin: 0;
            padding: 1em 1em;
            -webkit-box-shadow: none;
            box-shadow: none;
            font-size: 1em;
            border-radius: 0;

            .header{
                display: block;
                margin: '';
                font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
                color: rgba(0,0,0,.85);

                :not(.ui){
                    font-weight: 700;
                    font-size: 1.28571429em;
                    margin-top: -.21425em;
                    line-height: 1.28571429em;
                }
            }
        }
    }


`



export default function DisplayCards({ users }) {
    const generateFollowers = () => {
        // debugger
        return users.map(aUser => {
            // debugger
            return aUser.followersLogin.map(aFollower => {
                // debugger
                return <option value={aFollower}>{aFollower}</option>
            })
        })
    }
    const displayUsers = () => {
        return (

            users.map(aUser => {
                return <Styles>

                    <h1>DisplayCards</h1>
                    <div className='card-container card ui'>
                        <div className='card-header img'>
                            <img src={aUser.avatar_url} alt={`Avatar of ${aUser.name}`} />
                        </div>
                        <div className='card-body content'>
                            <div className="header">
                                <h2>{aUser.name}</h2>
                            </div>
                            <div className="description">
                                {/* List of Friends */}
                                <label htmlFor="followers">Followers:</label>
                                <select name="followerslogin" id="followers">
                                    <option disabled>Click to see</option>
                                    {/* generate list of followers name */}
                                    {
                                        aUser.followersLogin.map(aFollower => {
                                            // debugger
                                            return <option value={aFollower}>{aFollower}</option>
                                        })
                                    }
                                </select>
                                {/* end of list */}
                                <p>{aUser.bio}</p>
                            </div>
                        </div>
                        <div className='card-footer extra content'>
                            <p>Total Public Repos: {aUser.public_repos}</p>
                        </div>
                    </div>
                </Styles>
            })
        )
    }
    return displayUsers()
}