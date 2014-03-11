Journal.Views.PostEdit = Backbone.View.extend({
  template: JST['posts/edit'],

  events: {
    "submit form.edit": "edit"
  },

  render: function() {
    var renderedContent = this.template({ post: this.model });

    this.$el.html(renderedContent);

    return this;
  },

  edit: function (event) {
    event.preventDefault();
    var title = this.$("#post_title").val();
    var body = this.$("#post_body").val();
    this.model.save({title: title, body: body});

    this.render();
  }


});