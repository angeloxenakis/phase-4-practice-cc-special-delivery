class DriversController < ApplicationController
    def index
        drivers = Driver.all 
        render json: drivers, include: [:deliveries, :packages]
    end
end
