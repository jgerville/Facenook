class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :parent_post_id
    add_index :posts, :parent_post_id
  end
end
