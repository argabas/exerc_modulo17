class LoginScreen {
    get #StoreAddress(){return $('android.widget.EditText')}

    get #continue() {return $('id:bottom_button')}

    get #continueWithStoreCredentials() {return $('id:login_site_creds')}

    get #username() {return $('android=new UiSelector().text("Username")')}

    get #password() {return $('android=new UiSelector().text("Password")')}

    get #twoFactorPasswordBtn() {return $('id:login_enter_password')}

    async setStoreAddress(url) {await this.#StoreAddress.setValue(url)}

    async continue() {await this.#continue.click()}

    async continuecred () {
        await this.#continueWithStoreCredentials.waitForExist({ timeout: 20000 })
        return await this.#continueWithStoreCredentials.click()
    }   
    
    async login(username, password) {
        await this.#username.waitForExist({ timeout: 20000 })
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }

    async goToTwoFactorAuth() {
        await this.#twoFactorPasswordBtn.waitForExist({ timeout: 20000 })
        await this.#twoFactorPasswordBtn.click()}

    async twoFactorLogin(password) {
        await this.#password.waitForExist({ timeout: 20000 })
        await this.#password.setValue(password)
        await this.#continue.click()
    }

}

module.exports = new LoginScreen()