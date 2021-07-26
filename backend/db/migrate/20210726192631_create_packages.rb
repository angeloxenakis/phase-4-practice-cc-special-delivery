class CreatePackages < ActiveRecord::Migration[6.1]
  def change
    create_table :packages do |t|
      t.string :item
      t.string :address
      t.boolean :delivery_status

      t.timestamps
    end
  end
end
