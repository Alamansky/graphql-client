import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Post from './Post';
import Posts from './Posts';
import NewPost from './NewPost';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.scss';

const client = new ApolloClient({
	uri: 'https://api-useast.graphcms.com/v1/ck13rzxna504y01fm485f41tt/master',
});

/* client
	.query({
		query: testQuery,
	})
	.then((res) => console.log(res)); */

class App extends React.Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<h1>Sup</h1>
					<Switch>
						<Route exact path='/' component={Posts} />
						<Route path='/post/new' component={NewPost} />
						<Route path='/post/:id' component={Post} />
					</Switch>
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
