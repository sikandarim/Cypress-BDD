const users = {
    validUser: {
      username: "standard_user",
      password: "secret_sauce"
    },
    invalidUser: {
      username: "invalid_user",
      password: "secret_sauce"
    },
    invalidPassword: {
      username: "standard_user",
      password: "wrong_password"
    }
  };
  
  class UserDataLoader {
    static getUser(userType) {
      return users[userType];
    }
  }
  
  export default UserDataLoader;
  