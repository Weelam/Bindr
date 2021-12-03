// mock data for users
const data = {
  data: [
    {
      userID: 0,
      profileImg: "https://i.insider.com/59ca65fefca6e427008b4776?width=700",
      firstName: "Joseph",
      username: "user",
      groups: [0, 1],
      friends: [1, 2, 3, 4, 5],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373"],
      program: "Gender Studies",
      year: "1st",
      bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
    },
    {
      userID: 1,
      profileImg:
        "https://i1.sndcdn.com/artworks-000631908307-olxc4k-t500x500.jpg",
      firstName: "Giorno Giovana",
      username: "b",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC123"],
      program: "Cinema Studies",
      year: "2nd",
      bio: "Mollit cupidatat ipsum pariatur laborum. Non cillum dolore non commodo do anim velit laboris labore duis ut dolore nisi. Commodo velit mollit non ex ad consequat est tempor. Eiusmod ad nostrud consectetur aliquip veniam. Occaecat sint tempor minim sit do velit dolore excepteur non eiusmod eu. Officia qui Lorem dolore dolore ipsum esse incididunt et tempor amet est in cillum nulla.",
    },
    {
      userID: 2,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "c",
      groups: [0],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 3,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "d",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 4,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "e",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 5,
      profileImg:
        "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
      firstName: "Josuke",
      username: "f",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373"],
      program: "Gender Studies",
      year: "Fourth",
      bio: "Eipsoafkemon pokemon peokmon pokemon pokemon pokemon pokemon pokemon pokemon pokemon pokemon pokemon rum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
    },
    {
      userID: 6,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "g",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 7,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "h",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 8,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "i",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 9,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "j",

      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 10,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "k",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 11,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "l",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 12,
      profileImg: "https://i.insider.com/59ca65fefca6e427008b4776?width=700",
      firstName: "Joseph",
      username: "m",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373"],
      program: "Political Science",
      year: "1st",
      bio: "Eiusmod qui mollit cillum dolore. Excepteur ut laborum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
    },
    {
      userID: 13,
      profileImg:
        "https://i1.sndcdn.com/artworks-000631908307-olxc4k-t500x500.jpg",
      firstName: "Giorno Giovana",
      username: "n",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC123"],
      program: "Cinema Studies",
      year: "2nd",
      bio: "Mollit cupidatat ipsum pariatur laborum. Non cillum dolore non commodo do anim velit laboris labore duis ut dolore nisi. Commodo velit mollit non ex ad consequat est tempor. Eiusmod ad nostrud consectetur aliquip veniam. Occaecat sint tempor minim sit do velit dolore excepteur non eiusmod eu. Officia qui Lorem dolore dolore ipsum esse incididunt et tempor amet est in cillum nulla.",
    },
    {
      userID: 14,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "o",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 15,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "p",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 16,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "q",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 17,
      profileImg:
        "https://images.mubicdn.net/images/avatars/108776/cache-108776-1523899185/images-large.png",
      firstName: "Josuke",
      username: "r",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373"],
      program: "Gender Studies",
      year: "Fourth",
      bio: "Eipsoafkemon pokemon peokmon pokemon pokemon pokemon pokemon pokemon pokemon pokemon pokemon pokemon rum veniam eu. Nulla nostrud officia mollit non elit magna qui adipisicing culpa fugiat sunt nostrud culpa. Pariatur tempor voluptate veniam commodo quis veniam commodo ex consectetur. Tempor cillum qui eiusmod sit minim velit laboris consequat duis.",
    },
    {
      userID: 18,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "s",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 19,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "t",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 20,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "u",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 21,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "v",

      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 22,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "w",
      groups: [0],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 23,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Jotaro",
      username: "x",
      groups: [1],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "regular",
      courses: ["CSC309", "CSC373", "CSC111", "CSC473", "CSC369"],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
    {
      userID: 24,
      profileImg:
        "https://i.pinimg.com/736x/14/01/b3/1401b3fee6363c9f6aa7be2c50c25bed.jpg",
      firstName: "Admin",
      username: "admin",
      groups: [],
      friends: [],
      wantToMatch: [],
      rejected: [],
      role: "admin",
      courses: [],
      program: "Hamburger Flipping",
      year: "3rd",
      bio: "Excepteur sit laboris cillum dolor Lorem reprehenderit sunt. Lorem deserunt veniam irure elit. Consectetur culpa culpa irure Lorem. Non cupidatat sint sunt laboris aliquip eu eu aute excepteur magna Lorem officia. Veniam eu velit id excepteur nulla est in culpa adipisicing sint ad mollit commodo amet.",
    },
  ],
};

export default data;