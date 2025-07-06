import userData from '../fixtures/user-data.json'

describe('Orange ERM test', () => {
  const selectorslist  = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: '.oxd-topbar-header-title',
    wrongCredentialAlert: "[role='alert']"

  }
   
  it('Login successful', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type (userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type (userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.selectionTitleTopBar).contains('Dashboard')
    
})
it('Login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type (userData.userFail.username)
    cy.get(selectorslist.passwordField).type (userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
   
  
  })
})
