Journal.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    "submit form": "form"
  },

  render: function() {
    var renderedContent = this.template({ post: this.model,
                                      collection: this.collection });

    this.$el.html(renderedContent);

    return this;
  },

  form: function (event) {
    event.preventDefault();
    var title = this.$("#post_title").val();
    var body = this.$("#post_body").val();
    var post = this.model
    var params = {title: title, body: body}

    if (post.isNew()) {
      Journal.Collections.posts.create(params)
    } else {
      this.model.save(params);
    }
    Backbone.history.navigate("", {trigger: true});
    this.$el.remove()
  }

});