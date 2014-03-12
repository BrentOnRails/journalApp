Journal.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  render: function() {
    var renderedContent = this.template({ post: this.model });

    this.$el.html(renderedContent);

    return this;
  },

  events: {
    "dblclick #title" : "changeThingy",
    "dblclick #body" : "changeThingy",
    "blur input" : "submit"
  },

  changeThingy: function(event) {
    $node = $(event.currentTarget);
    var id = $node.attr("id")
    $node.html( ' <input id='+id+' >')
  },

  submit: function (event){
    var $target = $(event.currentTarget)
    var input = $target.val();
    this.model.set($target.attr("id"), input)
    this.model.save();
    this.render();
  },

});



