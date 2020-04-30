const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const userPage = require('../pages/user.page')
const action = require('../actions/elementUtil')
const data = require('../config')



describe("Verify login page test cases", function(){

    it("fetch all links on homepage", function(){
        action.naviagteTo("/");
        homePage.getAllLinksAndGetStatus();
    })

    it.skip("User navigate to login page", function(){
        homePage.closeBanner();
        homePage.clickLoginLink();
    })

    it.skip("Enter credentials on login Page", function(){
        loginPage.doLogin(data.username, data.password)
        expect(userPage.getTextOfTheHeader()).equals(data.headerLoginPage)
    })

    it.skip("Verify that user successfully logged in", function(){
        expect(userPage.getTextOfTheHeader()).equals(data.headerLoginPage)
    })
})