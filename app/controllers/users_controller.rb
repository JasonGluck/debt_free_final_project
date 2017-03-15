require 'jwt'

class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:new, :create]

  def show
    user = User.find(params[:id])
    jwt = Auth.issue({user_id: user.id})
    render json: user
  end

  def create
    user = User.new(user_params)
    if user.save
      jwt = JWT.encode {user_id: user.id}, nil, 'none'
      render json: {jwt: jwt, user: user}
    else
      render status: 404, json: {error: user.errors.full_messages}
    end
  end

  def index
    users = User.all
    render json: users
  end

  # def update
  # end
  # def destroy
  # end
# REFACTOR HTK - add these actions
  def user_params
    params.require(:auth).permit(:name, :email, :password)
  end
end
