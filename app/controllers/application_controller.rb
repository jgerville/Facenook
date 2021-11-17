class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    render json: ["Must be logged in"] unless current_user
  end

  def logged_in?
    !!current_user
  end

  def login
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session_token[:session_token] = nil
    @current_user = nil
  end


end
