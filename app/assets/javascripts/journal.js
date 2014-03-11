window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // new Journal.Routers.AppRouter();
    // Backbone.history.start();
    //
    Journal.posts = new Journal.Collections.Posts;
    Journal.posts.fetch();
    var newIndexView = new Journal.Views.PostsIndex({collection: Journal.posts});

    $('body').html(newIndexView.render().$el);
  }
};

$(document).ready(function(){
  Journal.initialize();
});
