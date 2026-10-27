class User {
    firstName = '';
    lastName = '';
    #isActive = false;

    constructor(firstName, lastName, isActive = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#isActive = isActive;
    }

    getFullName() {
        return `${this.firstName ${this.lastName}`;
    }

    getActive() {
        return this.#isActive;
    }
}