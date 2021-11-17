class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.string :fname, null: false
      t.string :lname, null: false
      t.datetime :birthday, null: false
      t.string :gender

      t.text :jobs
      t.text :schools
      t.string :current_city
      t.string :hometown
      t.string :relationship_status

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :fname
    add_index :users, :lname
  end
end
