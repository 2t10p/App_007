module.exports = {
    'Portal e2e tests': function (browser) {
      const devServer = browser.globals.devServerURL
  
      browser
        .url(devServer)
        .waitForElementVisible('#app', 5000)
        .assert.elementPresent('.portal')
        .assert.containsText('h1', 'Portal Page')
        .end()
    }
  }
  