import React from "react";

class CurrentVideo extends React.Component {
	render() {
		const v = this.props.video;
		if (v) {
			return (
				<div>
					<div className='ui embed'>
						<iframe
							src={`https://www.youtube.com/embed/${v.id.videoId}`}
						></iframe>
					</div>
					<h2 className='ui large '>{v.snippet.title}</h2>
					<div className='ui segment'>{v.snippet.description}</div>
				</div>
			);
		}
		return <div>Plase enter something in the search bar above</div>;
	}
}

export default CurrentVideo;
