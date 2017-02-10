class PeriodsController < ApplicationController

  def create
    period = Period.new(period_params)
    if period.save
      render json: {period: period}
    else
      render status: 404, json: {error: period.errors.full_messages}
    end
  end

  def update
    period = Period.find(params[:id])
    period.update(period_params)
    render json: {period: period}
  end
  
  def destroy
    byebug
    period = Period.find(params[:id])
    sendID = period.id
    period.delete 
    render json: {id: sendID}
  end

  def period_params
    params.require(:period).permit(:name, :start_month, :start_year, :end_month, :end_year, :expenditure, :payment, :credit_card_id)
  end
end
