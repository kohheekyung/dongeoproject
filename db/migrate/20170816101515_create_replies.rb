class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      
      t.integer :user_id
      t.text :trade_money
      t.text :trade_mes
      t.integer :post_id
      t.timestamps null: false
    end
  end
end
