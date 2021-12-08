# team58

### Login Credentials

To login as a regular user, please use the following credentials.

  username: user, or user2, .... user11
  
  password: user, or user2, .... user11
  
To login as an admin, please use the following credentials.

  username: admin
  
  password: admin

### Unauthenticated Users
Users who have yet to will be greeted by the landing page, consisting of a brief description of the application a button that will direct them to the login page. Alternatively, they can also just click on the login button at the top right. At the top is the navbar: Logo will direct you to the landing page, find will direct you to the login page (since  you are unauthenticated), signup will direct you to the sign up page, and login will direct you to the login page. If the user doesn't have an account, they can simply create a new one by going to the sign up page and creating one there.
### Regular Users
After a regular user authenticates through the log in page, they will be greeted by their own dashboard. Here the left side will display all the friends and groups they have or are in. You can swap between the 2 friends and groups tabs. The friends tab is just to simply show the friends you have. The group tab shows all the groups you are in, and to add a gruop if you want. When you click 'Add Group', you will be prompted with a modal. Simply fill out the information and the group will be created. The newly created group should now appear in the group tab on the left. Note that any other users who you've added will receive a similar change (can only add friends). Now you can select on the group you just created and the right side of the dashboard should update. Now you are able to access the tasks, discussion and members tab. In the task tab, the tasks are all divided into 2 categories: finished, unfinished. You can create your own tasks by simply clicking on the add button at the bottom, here you can fill out the name of the task, desc. of the task, users assigned to do this task, and also the deadline. Each task's that is created will show up as a drop down element, which on expansino will display further details of the task. Inside here, you can also comment on the task. Furthermore, you can toggle the completion of each tasks, and it's position should update accordingly. The discussion feature is unfinished at the moment I am creating this readme. Finally, the members tab simply shows the users inside the group. Next, I will explain how you can add friends.

Now that the user is logged in, they can begin looking for potential partners by clicking "Find" in the navbar, which will greet them with a list of all possible candidates. On the left is the filter. Here the user can filter out the search by course, programs, or year. On the right is a grid display of all the users available that scrolls infinitely to the bottom. Each grid item consist's of the users name, year, program and courses. If a particular student shows potential, the user can then click on the grid item which will consequently prompt a modal to open up and they will be presented with a more indepth description of their profile. At the bottom of the modal are 2 buttons: reject, and match. Clicking on either buttons will close the modal and perform the desired action. Furthermore, their decisions will be reflected in the grid item. Those who they've rejected will be displayed in a red shade, and those who they want to match will be displayed in a green shade. This is to allow the user to keep track of who they've already gone through and to provide them the ability to change their minds if they so desire (they can reselect the same user and change their decision).

In additional to everything mentioned above, with the server side portion implemented, users can now send match requests to other users. Once a match has been sent, the other user will be given a notification on their side (accessed by clicking on the bell icon in top right). They can then click on a notification, which will prompt a modal to appear, where they can accept the match request or decline it. If accepted, both users will now appear in each others dashboard (make sure to refresh the page in the dashboard, or switch links back to it in order to see the udpated friends list).

Users can also change their profile detail if they desire. Simply click on the top right corner where the profile icon is located, and then click 'Profile'. From here, they can change the information that's presented to them. Note that as of right now users can not change their profile picture, this feature is not yet implemented. For now, the default profile image will just be travis scott's face.


### Admin Users
Admins are responible for managing the application. Upon logging in as an admin, they will be greeted with their dashboard: reports and messages. Clicking on any reports and messages will direct you to the reports and messages page, repsectively (phase 2 update: the reports feature is not finished implementing and thus doesn't workk). In the navbar, the admin can navigate to which ever page they desire, with the logo bringing them back to the dashboard page. 

Admin's are also able to manage the users. They can do so by first clicking on the users tab and from there they will be shown the list of all the users present in the web app. All their relevant informations will be displayed in a table format, and they can also choose to ban the user if they desire. This can be done by simply clicking on the additional option icon on the far right of a row, and then clicking 'Permanently Ban'. The table will be updated accordingly as well.


To logout, the admin can click the logout button at the top right and they will be directed back to the landing page as an unauthenticated user.


### Routes
app.post("/users/signup") 
- creates a new user
- input
  - body { username, password, name, year, program, profileImg }
- NOTE: the profileImg must be a url
- returns {message: "


### Libraries
- Material UI
