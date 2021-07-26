class CreateDeliveries < ActiveRecord::Migration[6.1]
  def change
    create_table :deliveries do |t|
      t.string :notes
      t.integer :package_id
      t.integer :driver_id

      t.timestamps
    end
  end
end
