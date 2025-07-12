class MyInfoPage {

 selectorsList() {

     const selectors = {
    
    firstNameField: "[name='firstName']",
    midNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    nationalityField:'.oxd-select-wrapper',
    selectorField: ".oxd-select-dropdown",
    savebutton: "[type='submit']",
               

     }
     return selectors
 }
 fillPersonalDetails(firstName, middleName, lastName){
    cy.get(this.selectorsList().firstNameField).clear ().type(firstName)
    cy.get(this.selectorsList().midNameField).clear().type(middleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    
 }
 fillEmployeeDetails(nickname, duration, name,birthdate, nationality, maritalStatus){

    cy.get(this.selectorsList().genericField).eq (3).clear().type(nickname)
    cy.get(this.selectorsList().genericField).eq (4).clear().type(duration)
    cy.get(this.selectorsList().genericField).eq (5).clear().type(name)
    cy.get(this.selectorsList().genericField).eq (6).clear().type(birthdate)
    cy.get(this.selectorsList().dateCloseButton).click()
    cy.get(this.selectorsList().nationalityField).eq(0).click()
    cy.get(this.selectorsList().selectorField) .should('be.visible')
    cy.get(this.selectorsList().selectorField).contains(nationality).click()
    cy.get(this.selectorsList().nationalityField).eq(1).click()
    cy.get(this.selectorsList().selectorField).should('be.visible')
    cy.get(this.selectorsList().selectorField).contains(maritalStatus).click()
 }
 saveForm(){
     cy.get(this.selectorsList().savebutton).eq(0).click()
 }

}
export default MyInfoPage
