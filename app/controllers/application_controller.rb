class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def sign_out
    if current_user
      current_user.reset_session_token
      session[:session_token] = nil
      return true
    else
      return false
    end
  end

  def signed_in?
    current_user ? true : false
  end
end
