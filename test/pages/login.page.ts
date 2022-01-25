import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions as EC} from 'protractor';
export class LoginPage {
    get usernameInput(): ElementFinder {
        return element(by.name('loginUsername'));
    }
    get passwordInput(): ElementFinder {
        return element(by.name('loginPassword'));
    }
    get loginButton(): ElementFinder {
        return element(by.xpath('//*[contains(text(),"Login")]'));
    }
    get errorMsgs(): ElementArrayFinder {
        return element.all(by.className('form-field__error'));
    }
    async navigateTo(): Promise<void> {
        await browser.get(browser.baseUrl);
        await browser.wait(EC.urlContains(browser.baseUrl), 8000);
    }
}