//Protractor configuration file
exports.config = {
    specs: ['./test/features/*.feature'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--no-sandbox", "--disable-extensions"],
            
        }
        
    },
    //Use the chrome driver from the environment variable(populated on the hosted build agent) if available, otherwise default to webdriver-manager.
   // chromeDriver: process.env['ChromeWebDriver'] ? require('path').join(process.env['ChromeWebDriver'], './chromedriver.exe') : null,
    //s
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts:{
        require: ['./test/steps/*steps.ts'],
        format: ["progress", "json:results.json"],
        tags: ['~@ignore']
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    },
    onComplete: () => {
        const outputPath = `${process.cwd()}/results`;
        const htmlOptions = {
            jsonFile: `${process.cwd()}/results.json`,
            output: `${outputPath}/index.html`,
            reportSuiteAsScenarios: true,
            theme: "bootstrap",
            storeScreenshots: true,
            screenshotsDirectory: outputPath,
        };
        const junitOptions = {
            inputJsonFile: `${process.cwd()}/results.json`
        };
        require('cucumber-html-reporter').generate(htmlOptions);
    },
}