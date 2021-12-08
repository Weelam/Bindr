# team58

### Login Credentials

To login as a regular user, please use the following credentials.
- username: user, or user2, .... user11
- password: user, or user2, .... user11
To login as an admin, please use the following credentials.
- username: admin
- password: admin

### Unauthenticated Users
Users who have yet to will be greeted by the landing page, consisting of a brief description of the application a button that will direct them to the login page. Alternatively, they can also just click on the login button at the top right. At the top is the navbar: Logo will direct you to the landing page, find will direct you to the login page (since  you are unauthenticated), signup will direct you to the sign up page, and login will direct you to the login page. Keep in mind that although sign up has a page right now, it doesn't create a new user upon completing and submitting the form. This is to respect the handout's wishes where we were directed to only use the login credentials "user" and "user" for username and password. 
### Regular Users
After a regular user authenticates through the log in page, they will be greeted by their own dashboard. Here the left side will display all the friends and groups they have or are in. 

Now that the user is logged in, they can begin looking for potential partners by clicking "Find" in the navbar, which will greet them with a list of all possible candidates. On the left is the filter. Here the user can filter out the search by course, programs, or year. On the right is a grid display of all the users available that scrolls infinitely to the bottom. Each grid item consist's of the users name, year, program and courses. If a particular student shows potential, the user can then click on the grid item which will consequently prompt a modal to open up and they will be presented with a more indepth description of their profile. At the bottom of the modal are 2 buttons: reject, and match. Clicking on either buttons will close the modal and perform the desired action (right now the information doesn't get updated since we have no backend). Furthermore, their decisions will be reflected in the grid item. Those who they've rejected will be displayed in a red shade, and those who they want to match will be displayed in a green shade. This is to allow the user to keep track of who they've already gone through and to provide them the ability to change their minds if they so desire (they can reselect the same user and change their decision). 

Authenticated users will also have a slightly different navbar. The far right of the navbar now lies a bell and profile icon. Clicking on either will present a dropdown of the notifications and profile menu, respectively. The profile menu consist's of different options (Profile(incomplete), Dashboard, Settings(incomplete), Logout). Here they can access the Dashboard once again(or click the logo) or logout.

PHASE 2 EDIT: 
In additional to everything mentioned above, with the server side portion implemented, users can now send match requests to other users. Once a match has been sent, the other user will be given a notification on their side (accessed by clicking on the bell icon in top right). They can then click on a notification, which will prompt a modal to appear, where they can accept the match request or decline it. If accepted, both users will now appear in each others dashboard (make sure to refresh the page in the dashboard, or switch links back to it in order to see the udpated friends list).

### Admin Users
Admins are responible for managing the application. Upon logging in as an admin, they will be greeted with their dashboard: reports and messages. Clicking on any reports and messages will direct you to the reports and messages page, repsectively. In the navbar, the admin can navigate to which ever page they desire, with the logo bringing them back to the dashboard page. 

In the reports, users, and coureses page the admin will be greeted with a table of all the details of that respective page. Reports will display any concerns useres have reported, users consist's of all the users, and coureses consist's of all the coureses. In each of these pages the admin can browse through them and remove whichever row he wants from the database(not really database right now, just hard coded data), by clicking on the actions button on the far right of each row and then "remove". They will be given more functions in the future such as adding information and manipulating it on a greater scale. The messages page as of right now is incomplete right now. It does have a chat feature, but the admin is not able to alternate between other users.

To logout, the admin can click the logout button at the top right and they will be directed back to the landing page as an unauthenticated user.

### Libraries
- Material UI
- React Icons
