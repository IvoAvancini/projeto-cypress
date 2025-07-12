import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange ERM test', () => {

   
  
it('Login fail', () => {
    
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password )
    loginPage.checkAcessInvalid()
   
   
  })
  it('Login Sucess', () => {
    
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password )
    dashboardPage.checkDashboardPage()
   
   
  })
})
