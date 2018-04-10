// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'Login e2e tests': function (browser) {
      // automatically uses dev Server port from /config.index.js
      // default: http://localhost:8080
      // see nightwatch.conf.js
      const devServer = browser.globals.devServerURL
  
      const LoginPage = devServer + '/Login/'
      browser
        .url(LoginPage)
        .waitForElementVisible('#app', 5000)
        .assert.elementPresent('.login')
        .assert.containsText('h1', 'Login Page')
        .end()
    }
  }
  