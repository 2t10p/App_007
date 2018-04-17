module.exports = {
  'Login e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    const PageURL = devServer + '/Login/'
    browser
      .url(PageURL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.login')
      .assert.containsText('h1', 'Login Page')
      .end()
  }
}
