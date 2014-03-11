Journal.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postsNew",
    "posts/:id": "postsShow",
    "posts/:id/edit": "postsEdit"
  },

  postsIndex: function () {
    var postIndex = new Journal.Views.PostsIndex({
      collection: Journal.Collections.posts
    });

    Journal.Collections.posts.fetch();
    $("div#sidebar").html(postIndex.render().$el);
  },

  postsShow: function(id) {

    var post = Journal.Collections.posts.get(id);

    var postShow = new Journal.Views.PostShow({
      model: post
    });

    $("div#content").html(postShow.render().$el);
  },

  postsEdit: function(id) {
    var post = Journal.Collections.posts.get(id);

    var postEdit = new Journal.Views.PostForm({
      model: post
    });

    $("div#content").html(postEdit.render().$el);
  },

  postsNew: function() {
    var post = new Journal.Models.Post();

    var postNew = new Journal.Views.PostForm({
      model: post,
      collection: Journal.Collections.posts
    });

    $("div#content").html(postNew.render().$el);
  }

});
