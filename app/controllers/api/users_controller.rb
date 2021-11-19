class Api::UsersController < ApplicationController

  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      @new = true
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :gender)
  end
end
