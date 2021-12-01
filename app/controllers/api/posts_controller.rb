class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render "api/posts/show"
    else
      render json: ["This post doesn't seem to exist."], status: 404
    end
  end

  def index_by_friends
    friend_ids_array = post_params["friend_ids"]
    array_including_self = friend_ids_array + [current_user.id]
    @posts = Post.find_by_friend_ids(array_including_self)
    render "api/posts/index"
  end

  def index_by_wall
    @posts = Post.find_by_wall_owner(params[:wall_id_query]).includes(:child_posts)
    render "api/posts/index"
  end

  def index_by_post_ids
    @posts = Post.all.where(:id => post_params[:ids])
    render "api/posts/index"
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render "api/posts/show"
  end

  private

  def post_params
    params.require(:post).permit(:wall_id, :author_id, :body, :parent_post_id, :friend_ids => [], :ids => [])
  end
end
