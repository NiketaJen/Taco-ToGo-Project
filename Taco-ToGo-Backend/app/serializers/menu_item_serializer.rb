class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image
end
