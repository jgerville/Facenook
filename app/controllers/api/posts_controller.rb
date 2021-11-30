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
    friend_ids_array = post_params.friend_ids
    @friends = Post.find_by_friend_ids(friend_ids_array)
    render "api/posts/index"
  end

  def index_by_wall
    wall_id = post_params.wall_id_query
    @friends = Post.find_by_wall_owner(wall_id)
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
    params.require(:post).permit(:wall_id, :author_id, :parent_post_id, :wall_id_query, friend_ids : [])
  end
end
