class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      @new = true
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    # add a check to see if they are a friend
    if @user
      render "api/users/show"
    else
      render json: ["The user doesn't exist or isn't your friend."], status: 404
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :gender, :jobs, :schools, :current_city, :hometown, :relationship_status, :profpic, :cover_photo)
  end
end