class Api::SessionsController < ApplicationController

  def create
    # debugger
    if (User.find_by(email: params[:user][:email]))
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user
        login(@user)
        render "api/users/show"
      else
        render json: ["The password you've entered is incorrect."], status: 401
      end
    else
      render json: ["The email you entered isn't connected to an account. Create a new Facenook account."]
    end
  end

  def destroy
    @user = current_user
    
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["There isn't anyone logged in"], status: 404
    end
  end
end
