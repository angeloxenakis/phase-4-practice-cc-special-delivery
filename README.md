# Practice CC - Special Delivery

Today we'll be keeping track of packages that need to be shipped to customers. We have Drivers, Packages, and Delivery models to work with, and need to propery identify the join model and construct the migrations and controllers for each.

You have a separate frontend and backend folder within this repo. All of the React is already written and should not need to be changed. You will be working in the backend folder and using the frontend to test your work.

# Domain Models:
* Driver - a driver can go on as many deliveries as they want, which connects them to a package
* Delivery - a delivery will use a driver to deliver a package
* Package - a package can be logged in a delivery with a driver


# Getting Started 
* Clone down this repo and note the separate backend and frontend folders within it.
* `cd` into the backend folder and run `bundle install` (run any `bundler update --bundle` or `bundle update` commands necessary if needed)
* Run the backend server with `rails s`

* In another terminal tab, `cd` to the frontend folder and run `npm install`
* Run the frontend application with `npm start`

# Deliverables

## Drivers
1. Create Drivers migration. A driver should have a `name` that is a string and an `img_url` that is a string.
2. A user should be able to view all drivers in the "drivers" section of the frontend page.

## Deliveries
1. Create Deliveries migration. A delivery should connect a `driver` to a `package`, and have a `notes` attribute that is a string.
2. A user should be able to view all deliveries in the "deliveries" section of the frontend page.
3. A user should be able to create a new delivery with the form in the frontend. This should execute the post request (this is written for you), create the instance in the back end, and show the new delivery in the frontend list.
4. Creating a delivery should valdiate that the notes section has something typed into it.
5. A user can delete a delivery

6. Advanced: creating a delivery should change the associated package's `delivery_status` to `true`.
7. Advanced: creating a delivery should valdiate that the notes section has a minimum of 5 characters and maximum of 200 characters.

## Packages
1. Create Packages migration. A Package should have an `item` that is a string, an `address` that is a string, and a `deliverey_status` that is a boolean.
2. A user should be able to view all packages in the "packages" section of the frontend page.