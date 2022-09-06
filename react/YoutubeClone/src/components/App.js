import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import CurrentVideo from "./CurrentVideo";
import youtube from "../apis/youtube";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { videos: [], current: null };
	}

	onSearch = async (term) => {
		const result = await youtube.get("/search", {
			params: { q: term },
		});
		this.setState({ videos: result.data.items, current: result.data.items[0] });
	};

	onImgClick = (v) => {
		this.setState({ current: v });
	};

	render() {
		return (
			<div>
				<SearchBar onSearch={this.onSearch} />
				<div className='ui two column grid container'>
					<div className='ui eleven wide column'>
						<div className='row'>
							<CurrentVideo video={this.state.current} />
						</div>
					</div>
					<VideoList onImgClick={this.onImgClick} videos={this.state.videos} />
				</div>
			</div>
		);
	}
}

export default App;
