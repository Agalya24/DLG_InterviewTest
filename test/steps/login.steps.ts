import { assert } from 'chai';
import { binding, then, when, given } from 'cucumber-tsflow';
import { browser, ExpectedConditions as EC } from 'protractor';
import { LoginPage, HomePage } from '../pages';

@binding()
export class LoginSteps {
    loginpage: LoginPage;
    homePage: HomePage;
    constructor() {
        this.loginpage = new LoginPage();
        this.homePage = new HomePage();
    }
    @given('I want to access the test application')
    async launchApplication(): Promise<void> {
        await this.loginpage.navigateTo();
    }
    @when('I enter my credentials userName {string} and password {string}')
    async enterCredentials(userName: string, password: string): Promise<void> {
        await this.loginpage.usernameInput.sendKeys(userName);
        await this.loginpage.passwordInput.sendKeys(password);
            }
    @when('I login to the application')
    async loginApplication(): Promise<void> {
             await this.loginpage.loginButton.click();
    }
    @then('I should be able to access the application')
    async validateHomePage(): Promise<void> {
        assert.isTrue(await this.homePage.successMsg.isDisplayed());
    }
    @then('I should see the error messages in the login page')
    async validateError(): Promise<void> {
        assert.isTrue(await this.loginpage.errorMsgs.get(0).isDisplayed());
        assert.isTrue(await this.loginpage.errorMsgs.get(1).isDisplayed());
    }
    @then('I should not be allowed to login to the application')
    async validateLoginButton(): Promise<void> {
        assert.isFalse(await this.loginpage.loginButton.isEnabled());
        
    }
    @then('validate dummy failure scenario')
    async validateDummyFailure(): Promise<void> {
        assert.isFalse(true);
        
    }
    
}