class MenuItem < ApplicationRecord
    has_many :order_menu_items
    has_many :orders, through: :order_menu_items
end
