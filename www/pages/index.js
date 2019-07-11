import React, { Component } from 'react';
import Cookies from 'cookies';

class Index extends Component {
    static async getInitialProps({ req, res }) {
        const isServer = typeof window === 'undefined';
        if (isServer) {
            const cookies = new Cookies(req, res);
            const data = cookies.get('from-user-google');
            if(Object.is(data, undefined)) {
                res.writeHead(303, { Location: '/login' });
                res.end();
            } else {
                return { data };
            }
        }
    }
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <header>
              <h1>Welcome to Chat</h1>
              <a href="/logout">LOGOUT</a>
            </header>
        );
    }
}

export default Index;
