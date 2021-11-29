class UpdateColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :friendreqs, :type, :kind
  end
end
