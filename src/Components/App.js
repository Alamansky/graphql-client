import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';

import './App.scss';

const client = new ApolloClient({
	uri: 'https://api-useast.graphcms.com/v1/ck13rzxna504y01fm485f41tt/master',
});

const POSTS_QUERY = gql`
	{
		posts {
			id
			title
			body
		}
	}
`;

/* client
	.query({
		query: testQuery,
	})
	.then((res) => console.log(res)); */

class App extends React.Component {
	render() {
		return (
			<div>
				<ApolloProvider client={client}>
					<h1>Sup</h1>
					<Query query={POSTS_QUERY}>
						{({ loading, data }) => {
							if (loading) return 'Loading...';
							const { posts } = data;
							return posts.map((post) => <h1>{post.title}</h1>);
						}}
					</Query>
				</ApolloProvider>
			</div>
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
