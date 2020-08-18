class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :status, :total, :pickup_time

  has_many :order_menu_items
  has_many :menu_items, through: :order_menu_items
  belongs_to :user
end
