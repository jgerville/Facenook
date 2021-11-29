class Api::FriendreqsController < ApplicationController

  def create
    @friendreq = Friendreq.new(friendreq_params)
    if @friendreq.save
      render "api/friendreqs/show"
    else
      render json: @friendreq.errors.full_messages, status: 422
    end
  end

  def show
    @friendreq = Friendreq.find(params[:id])
    if @friendreq
      render "api/friendreqs/show"
    else
      render json: ["Unable to find this friendreq."], status: 404
    end
  end

  def update
    @friendreq = Friendreq.find(params[:id])
    if @friendreq.update(friendreq_params)
      render "api/friendreqs/show"
    else
      render json: @friendreq.errors.full_messages, status: 422
    end
  end

  private

  def friendreq_params
    params.require(:friendreq).permit(:sender_id, :target_id, :type)
  end
end