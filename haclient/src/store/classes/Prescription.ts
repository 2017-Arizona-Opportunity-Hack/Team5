export default class Prescription {
    constructor(
        public id: number,
        public physician_id: number,
        public child_id: number,
        public name: string,
        public reason: string,
        public dosage: string,
        public units: string,
        public original_amount: number,
        public date: Date,){} //constructor shorthand!
}