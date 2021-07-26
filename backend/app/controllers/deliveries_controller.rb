class DeliveriesController < ApplicationController
    def index
        deliveries = Delivery.all 
        render json: deliveries, include: [:package, :driver]
    end

    def create 
        delivery = Delivery.create(delivery_params)
        
        if delivery.valid?
            delivery.package.update(delivery_status: true)
            render json: delivery, include: [:package, :driver]
        else
            redirect_to "/"
        end
    end

    def destroy
        delivery = Delivery.find_by(params[:id])
        delivery.destroy
    end

    private
    def delivery_params
        params.require(:delivery).permit(:package_id, :driver_id, :notes)
    end

end
