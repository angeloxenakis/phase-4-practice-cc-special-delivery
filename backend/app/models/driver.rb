class Driver < ApplicationRecord
    has_many :deliveries
    has_many :packages, through: :deliveries
end
