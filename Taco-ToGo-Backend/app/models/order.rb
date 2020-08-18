class Order < ApplicationRecord
    has_many :order_menu_items
    has_many :menu_items, through: :order_menu_items
    belongs_to :user
end
