import React from "react";
import Card from "../component/card";

class Cards extends React.Component {
	render() {
		const { toShow, click, all } = this.props;

		return (
			<>
				{all ? (
					<div className="cards">
						{toShow.map(({ id, name, email }, index) => {
							return (
								<Card
									key={index}
									id={id}
									name={name}
									email={email}
									click={click}
									all={all}
								></Card>
							);
						})}
					</div>
				) : (
					<div className="cards">
						{toShow.map(
							(
								{ id, name, email, username, phone, website, address, company },
								index
							) => {
								return (
									<Card
										key={index}
										id={id}
										name={name}
										email={email}
										username={username}
										phone={phone}
										website={website}
										adress={address}
										company={company}
										click={click}
										all={all}
									></Card>
								);
							}
						)}
					</div>
				)}
			</>
		);
	}
}

export default Cards;
