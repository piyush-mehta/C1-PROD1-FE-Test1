var actions = require("./../lib/browserAction.js");

module.exports = {
    elements: {
        userProfileDropdown: {
            selector: '#dropdownMenuLink'
        },
        logout: {
            selector: '[class*="dropdown-menu"] [class*="logout"]'
        },
        logo: {
            selector: "[qid='cHeader-1'] [src*='cup-logo']"
        }
    },
    commands: [
        {
            clickUserProfileDropdown: function(){
                this.api.useCss();
                actions.click(this,this.elements.userProfileDropdown.selector);
            },
            waitForLogoutToAppear: function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.logout.selector,30000);
            },
            clickLogout: function(){
                this.api.useCss();
                actions.click(this,this.elements.logout.selector);
            },
            waitForLogoToAppear: function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.logo.selector,60000);
            },
            clickLogo: function(){
                this.api.useCss();
                actions.click(this,this.elements.logo.selector);
            }
        }
    ]
};
