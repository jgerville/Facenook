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
    userId = params[:id].to_i
    if current_user.id == userId
      # if we are on the user's own page
      @pending_sent = Friendreq.get_sent_pending_friendreqs(userId)
      @pending_received = Friendreq.get_received_pending_friendreqs(userId)
      @accepted = Friendreq.get_accepted_friendreqs(userId)
      render "api/friendreqs/show_related_friendreqs"
    else
      # if we are on some different user's page
      friendreq = Friendreq.get_relationship(current_user.id, userId)
      @friendreq = friendreq[0] if friendreq
      render "api/friendreqs/show_related_friendreqs"
    end
  end

  def update
    @friendreq = Friendreq.find(params[:id])
    if @friendreq.update(kind: "accepted")
      render "api/friendreqs/show"
    else
      render json: @friendreq.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendreq = Friendreq.find(params[:id])
    if @friendreq
      @friendreq.destroy
      render "api/friendreqs/show"
    else
      render json: ["Couldn't find friendreq"], status: 404
    end
  end

  private

  def friendreq_params
    params.require(:friendreq).permit(:sender_id, :target_id, :kind)
  end

end