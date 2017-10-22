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
    var results = await DB.administration.insert.one({
        child_id: 1,
        prescription_id: 1,
        parent_id: 1
    }).catch((error) => {
        console.log("shits fucked", error);
    });
    console.log(results);
}