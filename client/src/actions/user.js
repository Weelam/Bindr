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
      setCurrentUser(null);
    })
    .catch((error) => {
      console.log(error);
    });
};

/*** Fetching User Data ************************************/

// update user details
export const updateUser = (new_obj) => {
  // new obj is going to contain the udpated user object
  const request = new Request(`${API_HOST}/api/user/${new_obj.username}`, {
    method: "post",
    body: JSON.stringify({ new_obj }),
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
      if (data.newUser !== undefined) {
        return data.newUser;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// get user object (only their profile details, not username and password!)
export const getUser = async (username, setCurrentUserObj) => {
  const url = `${API_HOST}/api/users/${username}`;
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    setCurrentUserObj(data["currentUser"]["profile"]);
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
    setUsers(data)
  } catch (error) {
    console.log(error);
  }
}