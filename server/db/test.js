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
    var results = await DB.home.select.all().catch((error) => {
        console.log("shits fucked");
    });
    console.log(results);
}