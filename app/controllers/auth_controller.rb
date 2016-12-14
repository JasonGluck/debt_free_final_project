class AuthController < ApplicationController
  def authenticate
    # byebug
    user = User.find_by_credentials(params[:email], params[:password])
    if user
      # byebug
      render json: authentication_payload(user)
    else
      render json: { errors: ['FOOOO'] }, status: :unauthorized
    end
  end

  private

  def authentication_payload(user)
    # byebug
    return nil unless user && user.id
    {git
      auth_token: AuthToken.encode({ user_id: id }),
      user: { id: user.id, email: user.email }
    }
  end
end
