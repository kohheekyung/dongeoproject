class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :content
      t.text :money
      t.string :unis, array: true, default: []
      t.integer :count
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
