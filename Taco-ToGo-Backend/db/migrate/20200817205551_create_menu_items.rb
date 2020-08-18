class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.float :price
      t.string :description
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
