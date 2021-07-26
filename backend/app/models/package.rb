class Package < ApplicationRecord
    has_many :deliveries
    has_many :drivers, through: :deliveries
end
