// here connect to a database for the practice hub code editor
// PostgresSQL is preferred, but MySQL is faster setup time

// here instead of having the data as objects, connect with a local hosted database
// and build API endpoints to be used in other files
const users = [
	{ id: 1, name: "john" },
	{ id: 2, name: "jane" },
];

const posts = [
	{
		id: 1,
		title: "Post 1",
		body: "....",
		userId: 1,
	},
	{
		id: 2,
		title: "Post 2",
		body: "....",
		userId: 1,
	},
	{
		id: 3,
		title: "Post 3",
		body: "....",
		userId: 2,
	},
	{
		id: 4,
		title: "Post 4",
		body: "....",
		userId: 2,
	},
];

// API endpoints (kinda)
export const getPosts = () => {
	return posts;
};

export const getPost = (id) => {
	return posts.find((post) => post.id === id);
};

export const getUser = (id) => {
	return users.find((user) => user.id === id);
};
