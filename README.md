# team58

### Login Credentials

To login as a regular user, please use the following credentials:
- username: user
- password: user
To login as an admin, please use the following credentials:
- username: admin
- password: admin

### Unauthenticated Users
Users who have yet to will be greeted by the landing page, consisting of a brief description of the application a button that will direct them to the login page. Alternatively, they can also just click on the login button at the top right. At the top is the navbar: Logo will direct you to the landing page, find will direct you to the login page (since  you are unauthenticated), signup will direct you to the sign up page, and login will direct you to the login page. Keep in mind that although sign up has a page right now, it doesn't create a new user upon completing and submitting the form. This is to respect the handout's wishes where we were directed to only use the login credentials "user" and "user" for username and password. 
### Regular Users
After a regular user authenticates through the log in page, they will be greeted by their own dashboard. On the far right consist's of the users profile details, such as their profile image, name, program, year and courses. In the center of the dashboard lies the messaging board. Here the users are able to send messages to one another. On the right is the to do list that permits the group to organize and plan out their study. At the bottom left is the list of groups(denoted as projects) and other users they have matched with and clicking on them will update the dashbaord accordingly (except for the chat). 

Now that the user is logged in, they can begin looking for potential partners by clicking "Find" in the navbar, which will greet them with a list of all possible candidates. On the left is the filter. Here the user can filter out the search by course, programs, or year. On the right is a grid display of all the users available that scrolls infinitely to the bottom. Each grid item consist's of the users name, year, program and courses. If a particular student shows potential, the user can then click on the grid item which will consequently prompt a modal to open up and they will be presented with a more indepth description of their profile. At the bottom of the modal are 2 buttons: reject, and match. Clicking on either buttons will close the modal and perform the desired action (right now the information doesn't get updated since we have no backend). Furthermore, their decisions will be reflected in the grid item. Those who they've rejected will be displayed in a red shade, and those who they want to match will be displayed in a green shade. This is to allow the user to keep track of who they've already gone through and to provide them the ability to change their minds if they so desire (they can reselect the same user and change their decision). 
### Libraries
- Material UI
- React Icons
