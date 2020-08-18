class MenuItemsController < ApplicationController
    def index
        menu_items = MenuItem.all
        render json: menu_items
    end

    def show
        menu_item = MenuItem.find_by(id: params[:id])
        menu_item.save
        
        render json: menu_item
    end
end
