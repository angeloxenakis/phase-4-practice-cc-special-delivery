class Delivery < ApplicationRecord
    belongs_to :driver
    belongs_to :package

    validates :notes, presence: true
end
