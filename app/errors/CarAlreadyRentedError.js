const ApplicationError = require("./ApplicationError");

class CarAlreadyRentedError extends ApplicationError {
  constructor(car) {
    super(`${car.name} is already rented!!`);
    this.mobil = car
  }

  get details() {
    return { car:this.mobil }
  }
}

module.exports = CarAlreadyRentedError;
