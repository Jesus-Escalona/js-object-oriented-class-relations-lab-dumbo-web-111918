let store = { drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(e => e.driverId === this.id)
  }

  passengers() {
    return this.trips().map(e => e.passenger())
  }

}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(e => e.passengerId === this.id)
  }

  drivers() {
    return this.trips().map(e => e.driver())
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(e => e.id === this.driverId)
  }

  passenger() {
    return store.passengers.find(e => e.id === this.passengerId)
  }

}
