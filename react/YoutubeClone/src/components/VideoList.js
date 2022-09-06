import React from "react";

class VideoList extends React.Component {
	render() {
		const videos = this.props.videos.map((v) => (
			<div key={v.id.videoId} className='row'>
				<img
					className='ui fluid image padded segment'
					alt={v.snippet.title}
					onClick={() => this.props.onImgClick(v)}
					src={v.snippet.thumbnails.high.url}
				></img>
			</div>
		));
		return <div className='ui four wide column'>{videos}</div>;
	}
}

export default VideoList;
