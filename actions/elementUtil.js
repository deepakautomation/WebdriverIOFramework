class ElementUtil{

    click(element){
        element.waitForDisplayed();
        element.click();
    }

    type(element, text){
        element.waitForDisplayed();
        element.clearValue();
        element.setValue(text);
    }

    getTitle(){
        browser.waitUntil(()=>{
            return browser.getTitle();
        }, 5000, "Page Title not found")
        
    }

    isTextEqualTo(element, text){
        return expect(element.getText()).equals(text);
    }

    naviagteTo(url){
        browser.url(url);
    }

    getElementText(element){
        element.waitForDisplayed();
        return element.getText();
    }

    isElementDisplayed(element){
        element.waitForDisplayed();
        return element.isDisplayed();
    }

    switchToFrame(element){
        element.waitForDisplayed();
        browser.switchToFrame(element);
    }
    
    switchToParentFrame(){
        browser.switchToParentFrame();
    }

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

}

module.exports = new ElementUtil();