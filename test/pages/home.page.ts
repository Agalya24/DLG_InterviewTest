import {browser, by, element, ElementFinder} from 'protractor';
export class HomePage {
    get successMsg(): ElementFinder {
        return element(by.className('logged-in__success'));
    }
}