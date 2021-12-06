const API_HOST = "http://localhost:5000";

// check if a user is logged in through session
export const checkSession = (setCurrentUser) => {
  const url = `${API_HOST}/users/check-session`;

  fetch(url)
  .then(res => {
      if (res.status === 200) {
          return res.json();
      }
  })  
  .then(data => {
      if (data && data.currentUser) {
        setCurrentUser(data.currentUser);
      }
  })
  .catch(error => {
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
      setCurrrentUser(data.currentUser);
      console.log("logged in currentUser: ", data.currentUser);
      return {login: true, message: "login successful"}
    } else if (res.status === 400) {
      console.log("bad username/password")
      return {login: false, message: "bad username/password"}
    } else {
      console.log("other issues");
      return {login: false, message: "other issues"}

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

/*** User Data ************************************/

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
  const url = `${API_HOST}/api/users`;
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

export const getUserByID = async (userID, setUserObj) => {
  const url = `${API_HOST}/api/usersID/${userID}`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setUserObj(data["user"]);
  } catch (error) {
    console.log(error);
  }
}


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
