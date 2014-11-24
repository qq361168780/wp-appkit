define(function (require) {

      "use strict";

      var _                   = require('underscore'),
      	  Backbone            = require('backbone'),
      	  Config              = require('root/config'),
      	  Tpl                 = require('text!theme/menu.html'),
      	  MenuItems           = require('core/models/menu-items');
      	  
      return Backbone.View.extend({
    	  
  		initialize : function(options) {
  			
  	        this.template = _.template(Tpl);
  	        
  	        _.bindAll(this,'render');
  			
  			this.menu = new MenuItems.MenuItems();
  			
  	    },

  	    addItem : function(id,type,label,options){
  	    	this.menu.add(_.extend({id:id,label:label,type:type,link: '#component-'+id},options));
  	    },
  	    
  	    resetAll : function(){
  	    	this.menu.reset();
  	    },
  	    
  	    render : function( ) {
  	    	var renderedContent = this.template({menu_items:this.menu.toJSON(), theme_path:'themes/'+ Config.theme});
  	        $(this.el).html(renderedContent);
  	        return this;
  	    }
  	    
  	});
});