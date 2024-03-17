import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    super(currency.code, currency.name);
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  displayFullPrice() {
    return `${this._amount} ${this._name} (${this._code})`;
  }
}
