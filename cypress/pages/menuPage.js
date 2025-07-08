class MenuPage {

    selectorlist() {

        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'


        }
        return selectors

    }

    accessMyInfo() {
        cy.get(this.selectorlist().myInfoButton).click()
    }
}
export default MenuPage