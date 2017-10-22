export default class Prescription {
    id: number;
    physician_id: number;
    child_id: number;
    name: string;
    reason: string;
    dosage: string;
    units: string;
    original_amount: number;
    date: Date;
}