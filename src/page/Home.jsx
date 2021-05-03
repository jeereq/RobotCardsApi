import React from "react";
import Header from "../component/header";
import Cards from "../component/cards";
import Search from "../component/search";
import Charger from "../component/chargement";

class Home extends React.Component {
	state = {
		etat: false,
		arrayShow: [],
		toShow: [],
		souvenir: [],
		cardContentVue: false,
		all: true
	};
	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then((respnse) => respnse.json())
			.then((data) => {
				let tempos = data.map(({ id, name, email, username }) => {
					return { id, name, email, username };
				});
				this.setState({
					arrayShow: tempos,
					toShow: tempos
				});
				this.setState({
					etat: !this.state.etat
				});
			});
	}

	search = (value) => {
		let regexp = new RegExp(value, "");
		let newArrayToShow = this.state.arrayShow.filter((element) => {
			return regexp.test(element.name);
		});
		this.setState({
			toShow: newArrayToShow,
			all: true
		});
	};
	click = (keys) => {
		this.setState({
			cardContentVue: true
		});
		fetch(`http://jsonplaceholder.typicode.com/users/${keys}`)
			.then((response) => response.json())
			.then((element) => {
				this.setState({
					toShow: [element]
				});
				this.setState({
					cardContentVue: false,
					all: false
				});
			});
	};
	render() {
		return (
			<>
				<Header></Header>
				<Search change={this.search}> </Search>
				{this.state.etat && !this.state.cardContentVue ? (
					<Cards
						toShow={this.state.toShow}
						click={this.click}
						all={this.state.all}
					></Cards>
				) : (
					<Charger></Charger>
				)}
				<div className="top" onClick={this.souvenir}></div>
			</>
		);
	}
}

export default Home;
