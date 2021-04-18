import { Component } from "react";

export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0,
		};
	}

	changeActive = (_index) => {
		this.setState({
			active: _index,
		});
	};

	render() {
		const scp = this.props.scps[this.state.active];
		return (
			<>
				<div className="main-article-list">
					<h4>Available Articles</h4>
					<ul>
						{this.props.scps.map((item, i) => (
							<li
								onClick={() => this.changeActive(i)}
								key={"scp-list-" + i}
							>
								{item.item}
							</li>
						))}
					</ul>
				</div>
				<article>
					<div className="info">
						<h2>{scp?.item}</h2>
						<p className="class">
							Class: <span>{scp?.class}</span>
						</p>
					</div>
					<div className="details">
						{scp?.image ? (
							<div className="part">
								<img src={scp?.image} alt={scp?.title} />
							</div>
						) : null}
						<div className="part">
							<p className="head">Description</p>
							<p>{scp?.desc}</p>
						</div>
						<br />
						<div className="part">
							<p className="head">Containment Procedure</p>
							<p>{scp?.containment}</p>
						</div>
					</div>
				</article>
			</>
		);
	}
}
