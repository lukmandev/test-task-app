export const getPostsFromLC = () => {
	const data = localStorage.getItem('posts');
	return data ? JSON.parse(data) : [];
};
