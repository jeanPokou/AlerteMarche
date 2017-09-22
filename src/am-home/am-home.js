Polymer({

    is: 'am-home',

    properties: {

        categories: {
            type: Array
        },

        cards: {
            type: Array,
            value: function() {
                return [
                    1,
                    2,
                    3,
                    4,
                    1,
                    2,
                    3,
                    4
                ];
            }
        },

        visible: {
            type: Boolean,
            observer: '_visibleChanged'

        }

    },

    _visibleChanged: function(visible) {
        if (visible) {
            this.fire('change-section', {
                title: 'Home'
            });
        }
    }

});
