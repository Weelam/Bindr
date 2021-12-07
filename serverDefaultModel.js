const defaultModel = {
    _id: "",
    username: "BannedUser",
    password: "defaultPassword",
    profile: {
        role: "user",
        name: "defaultName",
        year: 1,
        courses: [],
        program: "defaultProgram",
        bio: "",
        profileImg: "",
        groups: [],
        friends: [],
        wantToMatch: [],
        rejected: [],
        notifications: []
    },
}

module.exports = {defaultModel}