class CreateRecycleCenters < ActiveRecord::Migration[6.1]
  def change
    create_table :recycle_centers do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :country
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
