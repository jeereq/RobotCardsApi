import React from "react";

class Card extends React.Component {
	testExistanceParent = (element, limit) => {
		if (element.classList.contains(limit)) {
			return element;
		}
		return this.testExistanceParent(element.parentNode, limit);
	};
	click = (event) => {
		if (this.props.all) {
			let selfElement = this.testExistanceParent(event.target, "card");
			this.props.click(selfElement.id);
		} else {
			console.dir(event.target);
		}
	};
	render() {
		let { id, name, email, all } = this.props;
		let data;
		let company;
		let element = [];
		let comp = [];
		if (!all) {
			data = this.props.adress;
			for (let el of Object.keys(data)) {
				if (typeof data[el] !== "object")
					element.push({
						[el]: data[el]
					});
			}

			company = this.props.company;
			for (let test of Object.keys(company)) {
				if (typeof company[test] !== "object")
					comp.push({
						[test]: company[test]
					});
			}
		}
		return (
			<>
				<div className="card" id={id} onClick={this.click}>
					<div className="image">
						<img src={`https://robohash.org/${id}`} alt={`${id}-ulistration`} />
					</div>
					<div className="name">{name}</div>
					<div className="email">{email}</div>
				</div>
				{!all ? (
					<div className="data">
						<div className="username">username : {this.props.username}</div>
						<div className="phone">phone : {this.props.phone}</div>
						<div className="website">website : {this.props.website}</div>
						<div className="company">
							<dd>company:{}</dd>
						</div>
						<div className="adress">
							<dd>adress :{}</dd>
						</div>
					</div>
				) : (
					""
				)}
			</>
		);
	}
}

export default Card;
