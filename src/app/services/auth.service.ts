export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return this.loggedIn;
  }

  loggin() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
