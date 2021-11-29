class Api::FriendreqsController < ApplicationController

  def create
    @friendreq = Friendreq.new(friendreq_params)
    @friendreq.kind = "pending"
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

  def show_related_friendreqs
    userId = params[:id]
    if current_user.id == userId
      @pending_sent = Friendreq.get_sent_pending_friendreqs(userId)
      @pending_received = Friendreq.get_received_pending_friendreqs(userId)
    end
    @accepted = Friendreq.get_accepted_friendreqs(userId)

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
    params.require(:friendreq).permit(:sender_id, :target_id, :kind)
  end

end