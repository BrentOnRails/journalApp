Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  render: function() {
    var renderedContent = this.template({ posts: this.collection });

    this.$el.html(renderedContent);

    return this;
  },

  events: {
    "click button.delete": "delete"
  },

  delete: function(event){
    //find out which button was clicked
    //remove it from the collection
  },

  initialize: function (options){
    this.listenTo(this.collection, "add change:title remove reset sync", this.render)
  }




});

