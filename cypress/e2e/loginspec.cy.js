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
    cy.get(selectorslist.usernameField).type ('Admin')
    cy.get(selectorslist.passwordField).type ('admin123')
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.selectionTitleTopBar).contains('Dashboard')
    
})
it('Login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type ('test')
    cy.get(selectorslist.passwordField).type ('test')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
   
  
  })
})
