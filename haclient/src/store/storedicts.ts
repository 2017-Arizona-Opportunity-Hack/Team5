import Child from './classes/Child';
import Home from './classes/Home';
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
