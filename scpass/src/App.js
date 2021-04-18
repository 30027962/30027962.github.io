import { Component } from "react";

import "./App.css";
import scpData from "./data/scp.json";

import Article from "./Article";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scps: scpData,
		};
	}
	render() {
		return (
			<div className="App">
				<Header />
				<Article scps={this.state.scps} />
				<Footer />
			</div>
		);
	}
}

export default App;
