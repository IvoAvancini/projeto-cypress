import userData from '../fixtures/user-data.json'

describe('Orange ERM test', () => {
  const selectorslist  = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: '.oxd-topbar-header-title',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firsNameField: "[name='firstName']",
    midNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    nationalityField:'.oxd-select-wrapper',
    selectorField: ".oxd-select-dropdown",
    savebutton: "[type='submit']",
    


  }
   
  it.only('User Info Update- Success', () => {


    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type (userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type (userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.selectionTitleTopBar).contains('Dashboard')
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firsNameField).clear ().type('Maria Flor')
    cy.get(selectorslist.midNameField).clear().type('Vieira')
    cy.get(selectorslist.lastNameField).clear().type('Avancini')
    cy.get(selectorslist.genericField).eq (3).clear().type('Neneco')
    cy.get(selectorslist.genericField).eq (4).clear().type('1 aninho')
    cy.get(selectorslist.genericField).eq (5).clear().type('pilisca')
    cy.get(selectorslist.genericField).eq (6).clear().type('2024-12-05')
    cy.get(selectorslist.dateCloseButton).click()
    cy.get(selectorslist.nationalityField).eq(0).click()
    cy.get(selectorslist.selectorField) .should('be.visible')
    cy.get(selectorslist.selectorField).contains('Brazilian').click()
    cy.get(selectorslist.nationalityField).eq(1).click()
    cy.get(selectorslist.selectorField).should('be.visible')
    cy.get(selectorslist.selectorField).contains('Other').click()
    cy.get(selectorslist.savebutton).eq(0).click()
    

    
    
})
it('Login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type (userData.userFail.username)
    cy.get(selectorslist.passwordField).type (userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
   
  
  })
})
