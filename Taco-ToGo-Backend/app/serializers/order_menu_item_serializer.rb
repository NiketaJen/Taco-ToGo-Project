class OrderMenuItemSerializer < ActiveModel::Serializer
  attributes :id, :menu_item_id, :order_id, :quantity
end
