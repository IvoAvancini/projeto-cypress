class DashboardPage {

    selectorlist() {

     const selectors = {
        dashboardGrid: '.oxd-topbar-header-title'
     }
     return selectors

    } 

    checkDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')   
        cy.get(this.selectorlist().dashboardGrid).should('be.visible')
    }



}
export default DashboardPage