class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages, :status => :unprocessable_entity
    end
  end

  def index
    @posts = Post.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts }
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
