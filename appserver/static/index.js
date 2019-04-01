require([
    'underscore',
    'backbone',
    'jquery',
    'splunkjs/mvc',
    '../app/help_menu/components/MenuLinkView',
    'splunkjs/mvc/simplexml/ready!'
], function(_, Backbone, $, mvc, MenuLinkView) {

    $('.help-button').each(function() {

        var helpButtonContainer = $(this);

        var menuLinkView = new MenuLinkView({ 
            "link-text": helpButtonContainer.data('link-text'), 
            "text": helpButtonContainer.data('text') 
        });

        helpButtonContainer.append(menuLinkView.$el);            

        menuLinkView.render();
        
    });

});
