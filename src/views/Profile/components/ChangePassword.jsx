import app from 'firebase/app';

class ChangePassWord {
  constructor() {
    this.auth = app.auth;
  }

  getCurrentUser() {
    return this.auth().currentUser;
  }

  reauthenticate(currentPassword) {
    var user = this.getCurrentUser();
    var cred = this.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  }

  async changePassword(currentPassword, newPassword) {
    const user = this.getCurrentUser();
    try {
      await this.reauthenticate(currentPassword);
    } catch (error) {
      return error;
    }
    try {
      await user.updatePassword(newPassword);
      return { code: 'Actualizada con exito' };
    } catch (e) {
      return e;
    }
  }
}

const changePass = new ChangePassWord();

export default changePass;
