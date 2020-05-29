const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
function fullTimePartTimeLogger(object){
    for(let i = 0; i < object.instructors.partTime.length; i++){
        console.log(object.instructors.partTime[i], "partTime")
    }
    for(let i = 0; i < object.instructors.fullTime.length; i++){
       console.log(object.instructors.fullTime[i], "fulltime")
    }
}
fullTimePartTimeLogger(nashvilleSoftwareSchool);
function findZoeAndAndy(object){
    for(let i = 0; i < object.instructors.partTime.length; i++){
        if(object.instructors.partTime[i] ==="Zoe")console.log(object.instructors.partTime[i], "partTime");
    }
    for(let i = 0; i < object.instructors.fullTime.length; i++){
        if(object.instructors.fullTime[i] === "Andy")console.log(object.instructors.fullTime[i], "fulltime");
       
    }
}
//findZoeAndAndy(nashvilleSoftwareSchool);
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
let paul = beatles.members[1];
let history = beatles.history;
let albums = beatles.albums;
console.log(`${paul.name} was in the Beatles from ${history.formed} to ${history.disbanded}. He was born in ${paul.birth}. He contributed heavily to the ${albums[3]} Album.`)