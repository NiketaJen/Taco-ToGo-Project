class OrdersController < ApplicationController
    before_action :find_order, only: [:show, :edit, :update]

    def index
        @orders = Order.all
        render json: @orders
    end

    def show
        @order.save
        
        render json: @order
    end

    def create
        @order = Order.new(user_id: params[:user_id], total: params[:total], status: params[:status], pickup_time: params[:pickup_time] )
        if @order.valid?
            @order.save
            render json: @order
        else
            render json: {error: 'Something went wrong, try again'}
        end
    end

    def edit
    end

    def update
         @order.update(order_params)
    end

    def destroy
        Order.destroy(params[:id])
    end

    private
    def find_order
      @order = Order.find(params[:id])
    end
  
    def order_params
      params.require(:order).permit(menu_item_ids:[])
    end
end
