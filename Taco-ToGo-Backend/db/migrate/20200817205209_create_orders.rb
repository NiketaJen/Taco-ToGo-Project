class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :status, default: "pending"
      t.float :total
      t.integer :user_id
      t.integer :pickup_time, default: 0

      t.timestamps
    end
  end
end
