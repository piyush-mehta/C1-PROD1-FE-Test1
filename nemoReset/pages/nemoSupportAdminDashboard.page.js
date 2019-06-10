var actions = require("./../lib/browserAction.js");
var format = require("string-template");

module.exports = {
    elements: {
        login_input:{
            selector:'#okta-signin-username'
        },
        login_password:{
            selector:'#okta-signin-password'
        },
        signin_submit:{
            selector:'#okta-signin-submit'
        },
        s_question:{
            selector:'#input64'
        },
        verify_btn:{
            selector:'input[value="Verify"]'
        },
        search:{
            selector:'[qid="sad-2"]'
        },
        searchbtn:{
            selector:'[qid="sad-3"]'
        },
        adminmenu:{
            selector:'.admin-menu ul'
        }
    },
    commands: [
        {
            waitForOktalogin:function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.login_input.selector,50000);
                actions.setValue(this,this.elements.login_input.selector,'adani');
                actions.setValue(this,this.elements.login_password.selector,'Udaipur512');
                actions.waitForElementVisible(this,this.elements.signin_submit.selector,50000);
                actions.click(this,this.elements.signin_submit.selector);
                actions.waitForElementVisible(this,this.elements.s_question.selector,50000);
                actions.setValue(this,this.elements.s_question.selector,'udaipur');
                actions.waitForElementVisible(this,this.elements.verify_btn.selector,50000);
                actions.click(this,this.elements.verify_btn.selector);
                this.api.pause(10000);
            },
            waitForSearchBox:function(){
                this.api.useCss();
                actions.waitForElementVisible(this,this.elements.search.selector,50000);
                actions.setValue(this,this.elements.search.selector,'a');
                actions.waitForElementVisible(this,this.elements.searchbtn.selector,50000);
                actions.click(this,this.elements.searchbtn.selector);
                actions.waitForElementVisible(this,this.elements.adminmenu.selector,50000);
            }
        }
    ]
};