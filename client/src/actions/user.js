
import ENV from './../config'
const API_HOST = ENV.api_host

// check if a user is logged in through session
export const checkSession = (setCurrentUser) => {
  const url = `${API_HOST}/users/check-session`;

  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((data) => {
      if (data && data.currentUser) {
        setCurrentUser(data.currentUser);
      }
    })
    .catch((error) => {
      // console.log(error);
    });
};

/*** Authentication ************************************/

// A function to send a POST request with the user to be logged in
export const login = async (info, setCurrrentUser) => {
  // Create our request constructor with all the parameters we need
  const request = new Request(`${API_HOST}/users/login`, {
    method: "post",
    body: JSON.stringify(info),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  try {
    const res = await fetch(request);
    if (res.status === 200) {
      const data = await res.json();
      const user = data.user;
      setCurrrentUser(user.username);
      console.log("logged in currentUser: ", user.username);
      return {
        login: true,
        message: "login successful",
        role: user.profile.role,
      };
    } else if (res.status === 400) {
      console.log("bad username/password");
      return { login: false, message: "bad username/password" };
    } else {
      console.log("other issues");
      return { login: false, message: "other issues" };
    }
  } catch (error) {
    console.log(error);
  }
};

// A function to send a GET request to logout the current user
export const logout = (setCurrentUser) => {
  const url = `${API_HOST}/users/logout`;
  fetch(url)
    .then((res) => {
      setCurrentUser(null);
      return res.json;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signup = async (details, history) => {
  const request = new Request(`${API_HOST}/users/signup`, {
    method: "post",
    body: JSON.stringify(details),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  try {
    const res = await fetch(request);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      history.push("/login");
    } else if (res.status === 400) {
      alert("Username already exists");
    }
  } catch (error) {
    console.log(error);
  }
};

/*** Courses/Programs Data ************************************/
// get all courses
// get all programs

export const getAllCourses = async (setAllCourses) => {
  const url = `${API_HOST}/api/courses`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    console.log(data);
    setAllCourses(data["courses"]);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// const response = await fetch(url);
// data = await response.json();
// return data;

export const getAllPrograms = async (setAllPrograms) => {
  const url = `${API_HOST}/api/programs`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setAllPrograms(data["programs"]);
    return data;
  } catch (error) {
    console.log(error);
  }
};

/*** User Data ************************************/

// delete a user by their id
export const removeUser = async (userID, setUsers) => {
  // replace the entire user object with the new one
  const request = new Request(`${API_HOST}/api/users/${userID}`, {
    method: "delete",
    body: JSON.stringify({}),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  try {
    const res = await fetch(request);
    const data = await res.json();
    setUsers(data.updatedUsers);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// update user details
export const updateUser = async (username, newUser) => {
  // replace the entire user object with the new one
  const request = new Request(`${API_HOST}/api/users/${username}`, {
    method: "put",
    body: JSON.stringify({ newUser }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  try {
    const res = await fetch(request);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// send notification to a user
// notification {
//   sender: currentUser,
//   recipient: recipient,
//   content: `${currentUser} wants to match with you!`
// }
export const sendNotification = async (notification) => {
  // replace the entire user object with the new one
  const request = new Request(
    `${API_HOST}/api/notification/send-notification`,
    {
      method: "put",
      body: JSON.stringify({ notification }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }
  );

  try {
    const res = await fetch(request);
    const data = await res.json();
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

// remove notification
export const removeNotification = async (notification) => {
  // replace the entire user object with the new one
  const request = new Request(
    `${API_HOST}/api/notification/remove-notification`,
    {
      method: "put",
      body: JSON.stringify({ notification }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }
  );

  try {
    const res = await fetch(request);
    const data = await res.json();
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

// get notifications for a user
export const getNotifications = async (username) => {
  const url = `${API_HOST}/api/notifications/${username}`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// add friend
export const addFriend = async (user1, user2) => {
  // add each other to friends list
  console.log(user1, user2);

  // replace the entire user object with the new one
  const request = new Request(`${API_HOST}/api/friends`, {
    method: "put",
    body: JSON.stringify({ user1, user2 }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  try {
    const res = await fetch(request);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// get user by their id
export const getUserByID = async (userID, setUserObj) => {
  const url = `${API_HOST}/api/usersID/${userID}`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setUserObj(data["user"]);
    return data["user"];
  } catch (error) {
    console.log(error);
  }
};

// get a users friends by their username
export const getFriends = async (username, setFriends) => {
  const url = `${API_HOST}/api/friends/${username}`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setFriends(data["friends"]);
  } catch (error) {
    console.log(error);
  }
};

// get user object (only their profile details, not username and password!)
export const getUser = async (username, setUserObj) => {
  const url = `${API_HOST}/api/users/${username}`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setUserObj(data["currentUser"]);
  } catch (error) {
    console.log(error);
  }
};

// get all users
export const getAllUsers = async (setUsers) => {
  const url = `${API_HOST}/api/users`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  } catch (error) {
    console.log(error);
  }
};

// ({
//   ...prev,
//   profile: {
//     groups: data["groupsObj"]
//   }
// })

/*** Group ************************************/

// get a users groups by their username
export const getGroups = async (username, setGroups) => {
  const url = `${API_HOST}/api/groups/${username}`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setGroups(data["groupsObj"]);
  } catch (error) {
    console.log(error);
  }
};

// create a new group for a user
export const createGroup = async (username, newGroup, setUserObj) => {
  console.log(newGroup);
  const url = `${API_HOST}/api/groups/${username}`;
  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({ newGroup }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  let data;
  try {
    const response = await fetch(request);
    data = await response.json();
    let newGroups = data.updatedUser.profile.groups;
    setUserObj((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        groups: newGroups,
      },
    }));
  } catch (error) {
    console.log(error);
  }
  // get groups will be called in a useEffect callback in dashboard page
};

/*** Tasks ************************************/

// get all the tasks for a group
export const getTasks = async (group, setTasks) => {
  const url = `${API_HOST}/api/task/${group._id}`;
  console.log("getTasks gid: ", group._id);
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setTasks(data.tasks);
    console.log("getTasks", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// create a task for a group
export const createTask = async (group, newTask, setGroup) => {
  console.log(newTask);
  const url = `${API_HOST}/api/task/${group._id}`;
  const request = new Request(url, {
    method: "post",
    body: JSON.stringify({ newTask }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  let data;
  try {
    const response = await fetch(request);
    data = await response.json();
    setGroup((prev) => ({
      ...prev,
      tasks: data.group.tasks,
    }));
  } catch (error) {
    console.log(error);
  }
};

// update Tasks for a group
export const updateTask = async (group, task, newTask, setTasks) => {
  console.log(group, task, newTask);
  const url = `${API_HOST}/api/task/${task._id}`;
  const request = new Request(url, {
    method: "put",
    body: JSON.stringify({ newTask, groupID: group._id }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  let tasks;
  try {
    const response = await fetch(request);
    tasks = await response.json();
    console.log(tasks);
    setTasks(tasks.tasks);
  } catch (error) {
    console.log(error);
  }
};

/*** Discussion ************************************/

// get all the tasks for a group
export const getDiscussions = async (group, setTasks) => {
  const url = `${API_HOST}/api/discussion/${group._id}`;
  console.log("getDiscussions gid: ", group._id);
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setTasks(data.discussions);
    console.log("getDiscussions", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const sortByDate = (a, b) => {
  return new Date(b.dateAdded) - new Date(a.dateAdded);
};
