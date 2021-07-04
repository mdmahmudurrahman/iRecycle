class RecycleCenter < ApplicationRecord
    has_many :recycle_center_materials, dependent: :destroy
    has_many :materials, through: :recycle_center_materials

    geocoded_by :address

    after_validation :geocode

    def address
      [street, city, state, country].compact.join(', ')
    end
end
