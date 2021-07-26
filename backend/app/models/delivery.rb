class Delivery < ApplicationRecord
    belongs_to :package 
    belongs_to :driver

    validates :notes, presence: true
end
