module.exports = {
  'NotFound e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL

    const PageURL = devServer + '/NotFoundTest/'
    browser
      .url(PageURL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.notfound')
      .assert.containsText('h1', 'Oops.. You just found an error page..')
      .end()
  }
}
