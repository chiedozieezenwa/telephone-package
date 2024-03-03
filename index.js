class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      console.log(`Dialing ${phoneNumber}`);
      this.notifyObservers(phoneNumber);
    } else {
      console.log(`Phone number ${phoneNumber} not found.`);
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => {
      observer.notify(phoneNumber);
      console.log(`Observer ${observer.constructor.name} was notified.`);
    });
  }
}

class PhoneNumberObserver {
  constructor() {}

  notify(phoneNumber) {
    console.log(`Phone number dialed: ${phoneNumber}`);
  }
}

class SpecialPhoneNumberObserver {
  constructor() {}

  notify(phoneNumber) {
    console.log(`Now Dialing ${phoneNumber}`);
  }
}

const telephone = new Telephone();

const observer1 = new PhoneNumberObserver();
const observer2 = new SpecialPhoneNumberObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2347023232");

telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2347023232");
telephone.dialPhoneNumber("9999999999");

telephone.removeObserver(observer2);

telephone.dialPhoneNumber("2347023232");
