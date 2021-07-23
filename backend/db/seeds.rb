Driver.destroy_all
Package.destroy_all

driver1 = Driver.create(name: "Jeffy", img_url: "https://i.insider.com/60f7072bb917280012752082?width=700")
driver2 = Driver.create(name: "Ricky", img_url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i9wWxVDHIRwQ/v0/1000x-1.jpg")

package1 = Package.create(address: "555 Street Ln", item: "candle", delivery_status: false)
package2 = Package.create(address: "123 Road Dr", item: "shirt", delivery_status: false)
package3 = Package.create(address: "999 First St", item: "screwdriver", delivery_status: false)
package4 = Package.create(address: "000 Path Way", item: "oatmeal", delivery_status: false)
package5 = Package.create(address: "555 Street Ln", item: "fancy pelaton bike", delivery_status: false)
package6 = Package.create(address: "123 Road Dr", item: "salt lamp", delivery_status: false)
package7 = Package.create(address: "999 First St", item: "coffee machine", delivery_status: false)
package8 = Package.create(address: "000 Path Way", item: "hammer", delivery_status: false)