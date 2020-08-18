class CreateOrderMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :order_menu_items do |t|
      t.references :menu_item, null: false, foreign_key: true
      t.references :order, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
