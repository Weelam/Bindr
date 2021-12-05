const API_HOST = "http://localhost:5000";

/*** Authentication ************************************/

// A function to send a POST request with the user to be logged in
export const login = (info, setCurrrentUser) => {
  // Create our request constructor with all the parameters we need
  const request = new Request(`${API_HOST}/users/login`, {
    method: "post",
    body: JSON.stringify(info),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((data) => {
      if (data.currentUser !== undefined) {
        setCurrrentUser(data.currentUser);
        console.log("updated currentUser: ", data.currentUser);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a GET request to logout the current user
export const logout = (setCurrentUser) => {
  const url = `${API_HOST}/users/logout`;
  fetch(url)
    .then((res) => {
      console.log("/users/logout")
      setCurrentUser(null);
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
    const data = await res.json();
    console.log(data)
    history.push('/login')
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
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};

// send notification to a user
export const sendNotification = async (sender, recipient) => {
  const url = `${API_HOST}/api/users`;

}

// get user object (only their profile details, not username and password!)
export const getUser = async (username, setCurrentUserObj) => {
  const url = `${API_HOST}/api/users/${username}`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setCurrentUserObj(data["currentUser"]);
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
