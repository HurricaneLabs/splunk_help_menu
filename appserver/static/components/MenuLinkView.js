define([
    'underscore',
    'backbone',
    'jquery',
    'splunkjs/mvc',
    'views/shared/delegates/Popdown'
], function(_, Backbone, $, mvc, Popdown) {
    
    // ... include our template ...
     var linkPopDownTpl = '<a href="#" class="popdown-toggle viewMore"><%-linkText %></a>' +
                         '<div class="dropdown-menu pivot-dropdown">' +
                         '<div class="arrow" style="margin-left: -8px;"></div>' +
                         '<div class="slideNavPlaceHolder help-text">' +
                         '<div class="auto">' +
                         '<p class="popdown-body"><%-text %></p>'
                         '</div></div></div>';

    // ... include our Backbone View  ...
    var MenuLinkView = Backbone.View.extend({

        initialize: function(attrs) {
            this.text = attrs['text'];
            this.linkText = attrs['link-text'];
        },

        tagName: 'span',

        render: function() {
            this.$el.html(_.template(linkPopDownTpl, {
                 linkText: this.linkText,
                 text: this.text
            }));

            this.popdown = new Popdown({
                 el:this.$el,
                 dialog: '.pivot-dropdown',
                 attachDialogTo: 'body',
                 mode: 'dialog'
            });

        }

    });

    // ... return our Backbone View ...
    return MenuLinkView;

});
