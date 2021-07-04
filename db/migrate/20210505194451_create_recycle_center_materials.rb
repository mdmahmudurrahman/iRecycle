class CreateRecycleCenterMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :recycle_center_materials do |t|
      t.references :material, null: false, foreign_key: true
      t.references :recycle_center, null: false, foreign_key: true

      t.timestamps
    end
  end
end
