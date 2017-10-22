import DB from './index';

// DB.home.select.all().then((results) => {
//     console.log(results);
// });

// DB.home.select.byId(1).then((results) => {
//     console.log(results);
// }).catch((error) => {

// });

test();


async function test() {
    var results = await DB.prescription.insert.one({
        physician_id: 2,
        child_id: 2,
        name: "Naproxen Sodium",
        reason: "Dislocated Shoulder",
        dosage: 600,
        original_amount: 6000,
        units: "mg"
    }).catch((error) => {
        console.log("shits fucked", error);
    });
    console.log(results);
}