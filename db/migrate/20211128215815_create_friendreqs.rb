class CreateFriendreqs < ActiveRecord::Migration[5.2]
  def change
    create_table :friendreqs do |t|
      t.integer :sender_id, null: false
      t.integer :target_id, null: false
      t.string :type, null: false

      t.timestamps
    end

    add_index :friendreqs, :sender_id
    add_index :friendreqs, :target_id
  end
end
