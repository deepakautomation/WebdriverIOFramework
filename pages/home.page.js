const action = require('../actions/elementUtil')
const fetch = require("node-fetch");

class HomePage{

    get popupCloseBtn(){
        return $("//div[@class='container']/preceding-sibling::div");
    }

    get signInLink(){
        return $("//a[contains(@class,'login-btn')]/span[1]");
    }

    get frame(){
        return $("//iframe[contains(@id,'container')]");
    }

    get getAllLinksOnPage(){
        return $$("//a[contains(@href,'http')]");
    }


    closeBanner(){
        
        action.switchToFrame(this.frame)
        action.click(this.popupCloseBtn);
        action.switchToParentFrame();
    }

    clickLoginLink(){
        action.click(this.signInLink);
    }

    getAllLinksAndGetStatus(){
        const links = this.getAllLinksOnPage;
        console.log(`number of links are ${links.length}`)
        
        links.forEach(element => {
            let endpoint = element.getAttribute("href")
            fetch(endpoint)
            .then(res =>{
                console.log(`Status of ${endpoint} is : ${res.status}`)
            })
        });
    }


     // constructor(){
    //     super(this);
    //     console.log("printing from constructor")
    //     if(!(action.isElementDisplayed(this.popupCloseBtn))){
    //         throw "Element is not on Homepage"
    //     }
    // }
}

module.exports = new HomePage();