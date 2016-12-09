

class CreditCardsController < ApplicationController
  skip_before_action :authenticate_user

  def create
    params[:card][:min_payment] = params[:card][:payment]
    params[:card][:user_id] = current_user.id
    card = CreditCard.new(card_params)
    if card.save
      render json: {card: card}
    else
      render status: 404, json: {error: card.errors.full_messages}
    end
  end

  def show
    card = CreditCard.find(params[:id])
    render json: card
  end

  def index
    cards = CreditCard.all
    render json: cards
  end

  def update
    card = CreditCard.find(params[:id])
    card.update(card_params)
    render json: {card: card}
  end

  # def destroy
  # end
# REFACTOR HTK - add these actions

  def card_params
    params.require(:card).permit(:name, :debt, :interest_rate, :min_payment, :user_id)
  end

end
