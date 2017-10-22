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
    var results = await DB.physician.insert.one({
        name: "Dr. Dre",
        phone: "135-791-1130"
    }).catch((error) => {
        console.log("shits fucked", error);
    });
    console.log(results);
}