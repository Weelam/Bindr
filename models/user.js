const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const UserProfileSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    default: "user"
  },

  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  year: {
    type: Number,
    required: true,
    // default: 1
  },
  courses: Array,
  program: {
    type: String,
    required: true
  },
  bio: String,
  profileImg: {
    type: String,
    default: "",
  },
  groups: [],
  friends: [],
  wantToMatch: [],
  rejected: [],
  notifications: Array
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 1,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
  profile: UserProfileSchema,
});

// hassh password before save
UserSchema.pre('save', function(next) {
	const user = this; // binds this to User document instance
	// don't wanna motdify password again (since this function always run every time before save)

	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// Find the user in the data base using username and password
UserSchema.statics.findByUsernamePassword = async function(username, password) {
	const User = this // binds this to the User model
  const user = await User.findOne({ username: username })

  // check if user exists
  if (!user) {
    console.log("User not found")
    return Promise.reject()
  }
  // if the user exists, make sure their password is correct
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        resolve(user)
      } else {
        console.log("Bad password")
        reject()
      }
    })
  })
}


// make a model using the User schema
const User = mongoose.model("User", UserSchema);
module.exports = { User };


