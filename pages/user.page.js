const action = require('../actions/elementUtil')

class UserPage{

    get popupCloseBtn(){
        return $("//div[@class='container']/preceding-sibling::div");
    }

    get header(){
        return $("//h2[contains(text(),'Select')]");
    }

    get frame(){
        return $("//iframe[contains(@id,'container')]");
    }

    closeBanner(){        
        action.switchToFrame(this.frame)
        action.click(this.popupCloseBtn);
        action.switchToParentFrame();
    }

    getTextOfTheHeader(){
         return action.getElementText(this.header);
    }

}

module.exports = new UserPage();