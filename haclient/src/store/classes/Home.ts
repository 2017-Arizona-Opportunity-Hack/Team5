export default class Home {
    id: number;
    address: string;
    phone_number: string;
    constructor(address: string, phone_number: string) {
        this.phone_number = phone_number;
        this.address = address;
    }
}