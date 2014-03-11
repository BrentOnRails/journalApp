Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  render: function() {
    var renderedContent = this.template({ posts: this.collection });

    this.$el.html(renderedContent);

    return this;
  },

  initialize: function (options){
    this.listenTo(this.collection, "add change:title remove reset sync", this.render)
  },


  events: {
    "click button.delete": "delete"
  },

  delete: function(event){
    var id = $(event.currentTarget).data('id');
    var post = this.collection.get(id);
    post.destroy();
    Backbone.history.navigate("", {trigger: true});
  }

});

