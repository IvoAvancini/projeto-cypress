import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js' 


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange ERM test', () => {

   
  it('User Info Update- Success', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password )
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('Maria Flor', 'Vieira', 'Avancini')
    myInfoPage.fillEmployeeDetails('Neneco', '1 aninho','pilisca', '2024-12-05','Brazilian', 'Single')
    myInfoPage.saveForm()
    
    

    
   
    

    
    
})
it('Login fail', () => {
    
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password )
    loginPage.checkAcessInvalid()
   
   
  })
})
