import axios from "axios";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: "AIzaSyDoh0QXGv5gwnpq4EtavO6PZlxtDCQFjXw",
	},
});
