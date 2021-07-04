class Material < ApplicationRecord
  belongs_to :category
  
  has_many :recycle_center_materials, dependent: :destroy
  has_many :recycle_centers, through: :recycle_center_materials

  class << self
    def material_options materials
      materials.map{|material| {name: material.name, id: material.id }}
    end
  end  
end
