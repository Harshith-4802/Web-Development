import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onSubmit = (e) => {
		e.preventDefault();
		// console.log(this);
		this.props.onSearch(this.state.term);
	};

	render() {
		return (
			<form
				onSubmit={this.onSubmit}
				style={{ marginTop: "10px" }}
				className='ui form container segment'
			>
				<div className='field'>
					<label>Search Bar</label>
					<input
						type='text'
						value={this.state.term}
						onChange={(e) => this.setState({ term: e.target.value })}
					/>
				</div>
			</form>
		);
	}
}

export default SearchBar;
