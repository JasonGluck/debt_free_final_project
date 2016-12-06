class PeriodsController < ApplicationController

  def create
    period = Period.new(period_params)
    if period.save
      render json: {period: period}
    else
      render json: {error: 'something is wrong with your data'}
    end
  end

  def update
    # untested in the wild
    # byebug
    period = Period.find(params[:id])
    period.update(period_params)
    render json: {period: period}
  end
  
  def destroy
    period = Period.find(params[:id])
    sendName = period.id
    period.delete 
    render json: {id: id}
  end

  def period_params
    params.require(:period).permit(:name, :start_month, :start_year, :end_month, :end_year, :expenditure, :payment, :credit_card_id)
  end
end
