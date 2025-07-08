import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange ERM test', () => {
  const selectorslist  = {
    
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

    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password )
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
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
    cy.get(selectorslist.selectorField).contains('Single').click()
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
