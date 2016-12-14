require 'auth'
class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:new, :create]

  def create
    user = User.find_by(email: params[:auth][:email])
    if user == nil
      render status: 404, json: {error: "No user with that email address exists in our system"}
    elsif !user.authenticate(params[:auth][:password])
      render status: 404, json: {error: "Email/password combination is invalid"}
    else 
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, user:user}
    end
  end
  
end
