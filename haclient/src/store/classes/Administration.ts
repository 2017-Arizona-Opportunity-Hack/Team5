export default class Prescription {
    constructor(
        public child_id: number,
        public prescription_id: number,
        public parent_id: number,
        public date: Date, ) { } //constructor shorthand!
}