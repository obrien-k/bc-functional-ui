module.exports = function() {

    return actor({

        getTitle() {
            return this.grabTitle();
        },

        getBaseUrl() {
            return this.grabCurrentUrl();
        },

    });

};

