Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow",
    "posts/:id/edit": "postsEdit"
  },

  postsIndex: function () {
    var postIndex = new Journal.Views.PostsIndex({
      collection: Journal.Collections.posts
    });

    Journal.Collections.posts.fetch();
    $("body").html(postIndex.render().$el);
  },

  postsShow: function(id) {

    var post = Journal.Collections.posts.get(id);

    var postShow = new Journal.Views.PostShow({
      model: post
    });

    $("body").html(postShow.render().$el);
  },

  postsEdit: function(id) {
    var post = Journal.Collections.posts.get(id);

    var postEdit = new Journal.Views.PostEdit({
      model: post
    });

    $("body").html(postEdit.render().$el);
  }

});
