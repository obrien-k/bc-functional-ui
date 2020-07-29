
module.exports = function() {

    return actor({

        /**
         * 
         * @param {string} link
         *  
         */
        navigateTo(link) {
            try {
                if(this.isElementVisible("[cp-nav-group='" + link + "']")) {
                    this.click("[cp-nav-group='" + link + "']");
                }
            } catch (error) {
                console.log('Could not find nav link in side navigation \n' + error);
            }
           
        },

        /**
         * 
         * @param {string} navItem 
         */
        select(navItem) {
            this.navigateTo(navItem);
        },

        navigateToHome() {
            this.click('#nav-dashboard');
        },

        //@todo
        collapseSideNav() {

        },

        //@todo
        expandSideNav(){

        },

        
        isSideNavCollapsed(){

        },
    });

};