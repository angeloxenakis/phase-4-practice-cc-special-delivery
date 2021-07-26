Rails.application.routes.draw do
    resources :drivers, :packages, :deliveries
end
