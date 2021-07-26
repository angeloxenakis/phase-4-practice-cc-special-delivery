class PackagesController < ApplicationController
    def index
        packages = Package.all 
        render json: packages, include: [:deliveries, :deliveries]
    end
end
