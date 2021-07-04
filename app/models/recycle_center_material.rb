class RecycleCenterMaterial < ApplicationRecord
  belongs_to :material
  belongs_to :recycle_center
end
