class Api::UsersController < ApplicationController

  def index
    params_clone = params.clone
    params_clone.delete("format")
    params_clone.delete("controller")
    params_clone.delete("action")
    # currently, params_clone only has one entry.
    # to break it into words, we need to use split(" ")
    @users = User.search(params_clone.values[0].split(" "))
    render "api/users/index"
  end

  def index_by_id_list
    ids_array = post_params["ids"]
    array_including_self = (ids_array + [current_user.id]).uniq
    @users = User.find_by_ids(array_including_self)
    render "api/users/index"
  end

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
    # add a check to see if they are a friend?
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
    params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :gender, :jobs, :schools, :current_city, :hometown, :relationship_status, :profpic, :cover_photo, :query, :ids => [])
  end
end