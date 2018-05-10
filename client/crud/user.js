const { db } = require('../../firebase/initFirebase');

// Add a user to the database
export const addUserFunction = (userObj) => {
  db.collection('users').add(userObj)
    .then((userRef) => {
      console.log('User written with ID: ', userRef.id);
      return userRef;
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// Add a logged-in users data in the database
export const updateUserFunction = (id, userObj) => {
  const user = db.collection('users').doc(id);
  user.update(userObj)
    .then((docRef) => {
      console.log('User Updated. . . ');
      return docRef;
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
};

// delete a user from the database
export const deleteUserFunction = (loggedInUserId) => {
  const user = db.collection('users').doc(loggedInUserId);
  user.delete()
    .then(() => {
      console.log('User successfully deleted');
    })
    .catch((error) => {
      console.error('Error deleting user: ', error);
    });
};

// Get a users data
export const fetchUserFunction = (id) => {
  db.collection('users').doc(id)
    .get()
    .then((user) => {
      console.log(user.data());
    })
    .catch((error) => {
      console.error(error);
    });
};

// fetch all users
export const fetchAllUsersFunction = () => {
  db.collection('users')
    .get()
    .then((snapshot) => {
      snapshot.forEach((user) => {
        console.log(user.data());
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
