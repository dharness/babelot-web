class Auth {

  setCurrentUser(user) {
    this.currentUser = user;
    return user;
  }

  getCurrentUser() {
    if (!this.currentUser) {

    }
    return this.currentUser || {};
  }

}

export default Auth
