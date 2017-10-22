import Child from './classes/Child';
import Home from './classes/Home';
import Parent from './classes/Parent';
import Prescription from './classes/Prescription';

export interface childDict {
    [key: number]: Child;
}
export interface homeDict {
    [key: number]: Home;
}
export interface scripDict {
    [key: number]: Prescription
}

export interface parentDict {
    [kkey: number]: Parent;
}