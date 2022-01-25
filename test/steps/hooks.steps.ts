import { after, before, binding } from 'cucumber-tsflow';
import { browser } from 'protractor';
@binding()
class Hooks {
    @before()
    beforeAllScenarios(): void {
        require('cucumber').setDefaultTimeout(10000);
    }

    @after()
    async afterAllScenarios(scenario: any): Promise<void> {
        if (scenario.result.status === 'failed') {
            // @ts-ignore
            const world = this._worldObj;

            await browser.takeScreenshot().then((screenshot) => {
                world.attach(screenshot, 'image/png');
            });
        }
    }
}
export = Hooks;