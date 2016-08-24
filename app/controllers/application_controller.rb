class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_action :restrict_access

  private # this is a private method. This means other people can't use this. This doesn't really matter in Ruby.

  def restrict_access
    # check if the request has an API key as part of it...
  end

end
