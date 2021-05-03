import React from "react";

class Search extends React.Component {
	change = (event) => {
		let targetValue = event.target.value;
		this.props.change(targetValue);
	};
	render() {
		return (
			<>
				<form action="index.html">
					<input
						type="search"
						name="search"
						placeholder="entrer votre recherche"
						onChange={this.change}
					/>
				</form>
			</>
		);
	}
}

export default Search;
