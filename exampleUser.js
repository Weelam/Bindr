// example data
const exampleUsers = [
	{
		username: "admin",
		password: "admin",
		profile: {
			role: "admin",
			name: "william lin",
			year: 1,
			courses: ["CSC309", "CSC373", "CSC311", "CSC343"],
			program: "Gender Studies",
			bio: "What's good youtube",
			profileImg: "https://yt3.ggpht.com/ytc/AKedOLTajmSLhwiVvP_gMjOU2GH5T_rzPR9igKZ7chnM=s900-c-k-c0x00ffffff-no-rj",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "weelam",
		password: "password123",
		profile: {
			role: "user",
			name: "william lin",
			year: 1,
			courses: ["CSC309", "CSC373", "CSC311", "CSC343"],
			program: "Gender Studies",
			bio: "What's good youtube",
			profileImg: "https://yt3.ggpht.com/ytc/AKedOLTajmSLhwiVvP_gMjOU2GH5T_rzPR9igKZ7chnM=s900-c-k-c0x00ffffff-no-rj",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user",
		password: "user",
		profile: {
			role: "user",
			name: "william lin",
			year: 1,
			courses: ["CSC309", "CSC373", "CSC311", "CSC343"],
			program: "Political Science",
			bio: "What's good youtube",
			profileImg: "https://msale24.com/wp-content/uploads/2021/06/Anime-JoJo-s-Bizarre-Adventure-Kujo-Jotaro-Little-cat-Cosplay-Autumn-Winter-Little-Dog-hat-headgear-5.jpg",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user2",
		password: "user2",
		profile: {
			role: "user",
			name: "william lin",
			year: 1,
			courses: ["CSC309", "CSC373", "CSC311"],
			program: "Cinema Studies",
			bio: "What's good youtube",
			profileImg: "https://i1.sndcdn.com/artworks-000631908307-olxc4k-t500x500.jpg",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user3",
		password: "user3",
		profile: {
			role: "user",
			name: "william lin",
			year: 1,
			courses: ["CSC309", "CSC311", "CSC343"],
			program: "Computer Science",
			bio: "What's good youtube",
			profileImg: "https://i.pinimg.com/236x/3c/92/10/3c92108f81fd15fa7d507f8f89fbd3ad.jpg",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user4",
		password: "user4",
		profile: {
			role: "user",
			name: "william lin",
			year: 1,
			courses: ["CSC311", "CSC343"],
			program: "Hamburger flipping",
			bio: "What's good youtube",
			profileImg: "https://static-cdn.jtvnw.net/jtv_user_pictures/34c4fc7d-5223-43c1-ac39-4acf70ff7188-profile_image-300x300.jpeg",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user5",
		password: "user5",
		profile: {
			role: "user",
			name: "william lin",
			year: 1,
			courses: ["CSC309", "CSC373", "CSC343"],
			program: "gangster",
			bio: "What's good youtube",
			profileImg: "https://i.pinimg.com/736x/71/52/65/715265feaef3bf4d3c94acce83c0d201.jpg",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user6",
		password: "user6",
		profile: {
			role: "user",
			name: "william lin",
			year: 1,
			courses: ["CSC309", "CSC373", "CSC311", "CSC343", "ANI411"],
			program: "hello",
			bio: "What's good youtube",
			profileImg: "https://cutewallpaper.org/22/meme-profile-picture-wallpapers/2309128774.jpg",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user7",
		password: "user7",
		profile: {
			role: "user",
			name: "william lin",
			year: 3,
			courses: ["CSC309", "CSC373", "CSC311", "CSC343", "MAT696"],
			program: "president",
			bio: "What's good youtube",
			profileImg: "https://i.redd.it/mvlg7zz3z7z11.jpg",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user8",
		password: "user8",
		profile: {
			role: "user",
			name: "william lin",
			year: 4,
			courses: ["CSC309", "CSC373", "CSC311", "CSC343", "CSC999"],
			program: "Anime Studies",
			bio: "What's good youtube",
			profileImg: "https://i.pinimg.com/originals/cd/d4/58/cdd45815fdbd7dcac10ab43af8415e13.jpg",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user9",
		password: "user9",
		profile: {
			role: "user",
			name: "william lin",
			year: 2,
			courses: ["CSC373", "CSC311", "CSC343"],
			program: "mcdonalds",
			bio: "What's good youtube",
			profileImg: "https://lh5.googleusercontent.com/proxy/MJkzkuzoHPUXY1bQ-F72GxaQtI5BKDYMxb35gGEj388-703VXDDOXfh8GRKr0e8S1MRm7LugT_8UL_pnn0egQE21_N7gsUNHEHPP4LTmHdX9EyUHmZdGPcXSRkOX6MdhT6iTskpcxTiDkg=w1200-h630-p-k-no-nu",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user10",
		password: "user10",
		profile: {
			role: "user",
			name: "william lin",
			year: 3,
			courses: ["CSC373", "CSC311", "CSC343"],
			program: "mcdonalds",
			bio: "What's good youtube",
			profileImg: "https://lh5.googleusercontent.com/proxy/MJkzkuzoHPUXY1bQ-F72GxaQtI5BKDYMxb35gGEj388-703VXDDOXfh8GRKr0e8S1MRm7LugT_8UL_pnn0egQE21_N7gsUNHEHPP4LTmHdX9EyUHmZdGPcXSRkOX6MdhT6iTskpcxTiDkg=w1200-h630-p-k-no-nu",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
	{
		username: "user11",
		password: "user11",
		profile: {
			role: "user",
			name: "william lin",
			year: 2,
			courses: ["CSC373", "CSC311", "CSC343"],
			program: "mcdonalds",
			bio: "What's good youtube",
			profileImg: "https://lh5.googleusercontent.com/proxy/MJkzkuzoHPUXY1bQ-F72GxaQtI5BKDYMxb35gGEj388-703VXDDOXfh8GRKr0e8S1MRm7LugT_8UL_pnn0egQE21_N7gsUNHEHPP4LTmHdX9EyUHmZdGPcXSRkOX6MdhT6iTskpcxTiDkg=w1200-h630-p-k-no-nu",
			groups: [],
			friends: [],
			wantToMatch: [],
			rejected: [],
			notifications: [],
		},
	},
]

module.exports = { exampleUsers }  // Export the active connection.