import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const clonedCar = new parent.constructor();

    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key) && key.startsWith('_')) {
        clonedCar[key] = this[key];
      }
    }
    return clonedCar;
  }
}
