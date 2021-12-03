class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render "api/likes/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def show
    @like = Like.find(params[:id])
    if @like
      render "api/likes/show"
    else
      render json: ["Unable to find this like."], status: 404
    end
  end

  def destroy
    like = Like.find(params[:id])
    if like
      like.destroy
    end
    render "api/likes/show"
  end

  private

  def like_params
    params.require(:like).permit(:id, :user_id, :post_id, :kind)
  end
end
