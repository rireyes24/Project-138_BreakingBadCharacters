

const dataCharacters  = [
    {
        id: 1,
        name: 'Walter H. White',
        nickname: 'Heisenberg',
        birthday: '09-07-1958',
        status: 'Dead',
        imageUrl: 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1674793603/BreakingBadCharacters/walter-white_d7oc6z.jpg',
        phrase: 'I am the danger!',
        starring: 'Bryan Cranston',
        occupation: [ "High School Chemistry Teacher", "Meth King Pin"],
    },
    {
        id: 2,
        name: "Jesse Pinkman",
        nickname: "Cap n' Cook",
        birthday: "09-24-1984",
        status: "Alive",
        imageUrl: "https://images.ladepeche.fr/api/v1/images/view/5c657d228fe56f28a6226565/large/image.jpg",
        phrase: "Yeah!, Bitch!!!",
        starring: "Aaron Paul",
        occupation: ["Meth Dealer"],
    },
    {
        id: 3,
        name: "Saul Goodman",
        nickname: "Jimmy McGill",
        birthday: "",
        status: "Alive",
        imageUrl: "https://rollingstone.uol.com.br/media/uploads/saul_goodman_reprod.jpg",
        phrase: "Hi, I am Saul Goodman!",
        starring: "Bob Odenkirk",
        occupation: [""],
    },
    {
        id: 4,
        name: "Skyler White",
        nickname: "",
        birthday: "08-11-1970",
        status: "Alive",
        imageUrl: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1674870851/BreakingBadCharacters/Skyler_White_xshjct.jpg",
        phrase: "",
        starring: "Anna Gunn",
        occupation: ["House wife", "Book Keeper", "Car Wash Manager", "Taxi Dispatcher"],
    },
    {
        id: 5,
        name: "Walter White Jr.",
        nickname: "Flynn",
        birthday: "07-08-1993",
        status: "Alive",
        imageUrl: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2013/09/walt_junior.jpg",
        phrase: "",
        starring: "RJ Mitte",
        occupation: ["Teenager"],
    },
    {
        id: 6,
        name: "Henry Schrader",
        nickname: "Hank",
        birthday: "Unknown",
        status: "Dead",
        imageUrl: "https://e.rpp-noticias.io/xlarge/2020/01/16/030403_888145.jpg",
        phrase: "",
        starring: "Dean Norris",
        occupation: ["DEA Agent"],
    },
    {
        id: 7,
        name: "Marie Schrader",
        nickname: "Marie",
        birthday: "",
        status: "Alive",
        imageUrl: "https://www.petitepoire.ca/wp-content/uploads/2016/10/Cast_bb_800x600_maria-schrader.jpg",
        phrase: "",
        starring: "Betsy Brandt",
        occupation: ["Housewife", "Clepto"],
    },
    {
        id: 8,
        name: "Mike Ehrmantraut",
        nickname: "Mike",
        birthday: "",
        status: "Dead",
        imageUrl: "https://indiehoy.com/wp-content/uploads/2019/09/Mike-Ehrmantraut.jpg",
        phrase: "",
        starring: "Jonathan Banks",
        occupation: ["Hitman", "Private Investigator", "Ex-Cop"],
    },
    {
        id: 9,
        name: "Gustavo Fring",
        nickname: "Gus",
        birthday: "",
        status: "Dead",
        imageUrl: "https://okdiario.com/img/series/2016/04/3913109-8993961646-bb8.j.jpg",
        phrase: "",
        starring: "Giancarlo Esposito",
        occupation: [""],
    },
    {
        id: 10,
        name: "Hector Salamanca",
        nickname: "Don Hector",
        birthday: "",
        status: "Dead",
        imageUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/4/4b/Hector_Salamanca.jpg",
        phrase: "",
        starring: "Mark Margolis",
        occupation: [""],
    },
    {
        id: 11,
        name: "Domingo Molina",
        nickname: "Krazy-8",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
        phrase: "",
        starring: "Maximino Arciniega",
        occupation: [""],
    },
    {
        id: 12,
        name: "Tuco Salamanca",
        nickname: "Tuco",
        birthday: "",
        status: "Dead",
        imageUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/e/ec/Tuco_Salamanca.jpg",
        phrase: "",
        starring: "Raymond Cruz",
        occupation: [""],
    },
    {
        id: 13,
        name: "Marco & Leonel Salamanca",
        nickname: "The Cousins",
        birthday: "",
        status: "Dead",
        imageUrl: "https://k5p5x6s5.rocketcdn.me/wp-content/uploads/2022/04/4d2c782a0a112fa253d2183ace74a4d3.jpeg",
        phrase: "",
        starring: "Luis & Daniel Moncada",
        occupation: [""],
    },
    {
        id: 14,
        name: "Lydia Rodarte-Quayle",
        nickname: "Lydia",
        birthday: "",
        status: "Dead",
        imageUrl: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-18051-breakingbad-624-1380209485.jpg",
        phrase: "",
        starring: "Laura Fraser",
        occupation: [""],
    },
    {
        id: 15,
        name: "Todd Alquist",
        nickname: "Ricky Hitler",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303",
        phrase: "",
        starring: "Jesse Plemons",
        occupation: [""],
    },
    {
        id: 16,
        name: "Jane Margolis",
        nickname: "Apology Girl",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653",
        phrase: "",
        starring: "Krysten Ritter",
        occupation: [""],
    },
    {
        id: 17,
        name: "Skinny Pete",
        nickname: "Skinny",
        birthday: "",
        status: "Alive",
        imageUrl: "https://static.wikia.nocookie.net/breakingbad/images/1/17/Skinny_Pete_El_Camino.jpeg",
        phrase: "",
        starring: "Charles Baker",
        occupation: [""],
    },
    {
        id: 18,
        name: "Brandon Mayhew",
        nickname: "Badger",
        birthday: "",
        status: "Alive",
        imageUrl: "https://imagez.tmz.com/image/f1/4by3/2019/07/17/f1949f71f6724888a7af493b02be5ee1_xl.jpg",
        phrase: "",
        starring: "Matt L. Jones",
        occupation: [""],
    },
    {
        id: 19,
        name: "Huell Babineaux",
        nickname: "Huell",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es",
        phrase: "",
        starring: "Lavell Crawford",
        occupation: [""],
    },
    {
        id: 20,
        name: "Steven Gomez",
        nickname: "Gomie",
        birthday: "",
        status: "Dead",
        imageUrl: "https://www.thesun.co.uk/wp-content/uploads/2022/01/5f282fac5fa9a40e2c00f6da-1.jpeg",
        phrase: "",
        starring: "Steven Michael Quezada",
        occupation: [""],
    },
    {
        id: 21,
        name: "Theodore Beneke",
        nickname: "Ted",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/b/bd/Cast_bb_700x1000_todd-beneke-lg.jpg/revision/latest?cb=20170723165057",
        phrase: "",
        starring: "Christopher Cousins",
        occupation: [""],
    },
    {
        id: 22,
        name: "Gale Boetticher",
        nickname: "GB",
        birthday: "",
        status: "Dead",
        imageUrl: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_gale-boetticher-lg.jpg",
        phrase: "",
        starring: "David Costabile",
        occupation: [""],
    },
    {
        id: 23,
        name: "Andrea Cantillo",
        nickname: "Andrea",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/5/51/Andrea_-_To%27hajilee.png/revision/latest?cb=20131025094457",
        phrase: "",
        starring: "Emily Rios",
        occupation: [""],
    },
    {
        id: 24,
        name: "Brock Cantillo",
        nickname: "Brock",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/9/97/Brock.png/revision/latest?cb=20170725193144",
        phrase: "",
        starring: "Ian Posada",
        occupation: [""],
    },
    {
        id: 25,
        name: "Carmen Molina",
        nickname: "Carmen",
        birthday: "",
        status: "Alive",
        imageUrl: "https://www.satiny.org/media/2017/11/Breaking-Bad-Green-Light-17.jpg",
        phrase: "",
        starring: "Carmen Serano",
        occupation: [""],
    },
    {
        id: 26,
        name: "Gretchen Schwartz",
        nickname: "Gretchen",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/5/5e/Gretchen_Schwartz.png/revision/latest?cb=20131005103735&path-prefix=es",
        phrase: "",
        starring: "Jessica Hecht",
        occupation: [""],
    },
    {
        id: 27,
        name: "Elliot Schwartz",
        nickname: "Elliot",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/8/8a/Elliott_Schwartz.png/revision/latest?cb=20131005103743&path-prefix=es",
        phrase: "",
        starring: "Adam Godley",
        occupation: [""],
    },
    {
        id: 28,
        name: "Gonzo",
        nickname: "Gonzo",
        birthday: "",
        status: "Dead",
        imageUrl: "https://i.insider.com/5f2478ad40c1f32c144dff0e?width=600&format=jpeg&auto=webp",
        phrase: "",
        starring: "Jesus, Payan, Jr.",
        occupation: [""],
    },
    {
        id: 29,
        name: "Christian Ortega",
        nickname: "Combo",
        birthday: "",
        status: "Dead",
        imageUrl: "https://static.wikia.nocookie.net/breakingbad/images/2/20/Combo_main.png",
        phrase: "",
        starring: "Rodney Rush",
        occupation: [""],
    },
    {
        id: 30,
        name: "Mrs. Pinkman",
        nickname: "Jesse's mom",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/a/a2/Tess_Harper.jpg/revision/latest?cb=20120923235754",
        phrase: "",
        starring: "Tess Harper",
        occupation: [""],
    },
    {
        id: 31,
        name: "Adam Pinkman",
        nickname: "Jesse's dad",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/c/c9/AdamPinkman.png/revision/latest?cb=20141117180836&path-prefix=es",
        phrase: "",
        starring: "Michael Bofshever",
        occupation: [""],
    },
    {
        id: 32,
        name: "Jake Pinkman",
        nickname: "Jake",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/a/a4/Jake.jpg/revision/latest?cb=20121214201656&path-prefix=de",
        phrase: "",
        starring: "Ben Petry",
        occupation: [""],
    },
    {
        id: 33,
        name: "No-Doze",
        nickname: "No-Doze",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/c/ca/No_Doze_2.png/revision/latest?cb=20131014073210",
        phrase: "",
        starring: "Cesar Garcia",
        occupation: [""],
    },
    {
        id: 34,
        name: "Emilio Koyama",
        nickname: "Emilio",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/trbreakingbad/images/9/9c/Emilio.jpeg/revision/latest?cb=20161029192022",
        phrase: "",
        starring: "John Koyama",
        occupation: [""],
    },
    {
        id: 35,
        name: "Dr. Delcavoli",
        nickname: "Dr. Delcavoli",
        birthday: "",
        status: "Alive",
        imageUrl: "https://res.cloudinary.com/dwvrok1le/image/upload/v1540314509/lj5qlbe6xvmmpxnspz6y.jpg",
        phrase: "",
        starring: "David House",
        occupation: [""],
    },
    {
        id: 36,
        name: "Wendy S.",
        nickname: "Wendy",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Wendy.jpg/revision/latest?cb=20170721162715",
        phrase: "",
        starring: "Julie Minesci",
        occupation: [""],
    },
    {
        id: 37,
        name: "Bogdan Wolynetz",
        nickname: "Bogdan",
        birthday: "",
        status: "Alive",
        imageUrl: "https://i.pinimg.com/originals/d5/c0/34/d5c0345ae70fbdbaa33b7537d685da54.jpg",
        phrase: "",
        starring: "Marius Stan",
        occupation: [""],
    },
    {
        id: 38,
        name: "Ken",
        nickname: "Ken Wins",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/8/8c/Ken.png/revision/latest?cb=20170721163649",
        phrase: "",
        starring: "Kyle Bornheimer",
        occupation: [""],
    },
    {
        id: 39,
        name: "Holly White",
        nickname: "Holly",
        birthday: "",
        status: "Alive",
        imageUrl: "https://external-preview.redd.it/AGoRf6tSmKYoGxRFj6RevVEmLlp9Z5hdWOj9aZ3I7Qc.jpg?auto=webp&s=ea73d28e012c05fba8cce7ad1f2a0ec83ceb64bf",
        phrase: "",
        starring: "Unknown",
        occupation: [""],
    },
    {
        id: 40,
        name: "George Merkert",
        nickname: "ASAC Merkert",
        birthday: "",
        status: "Alive",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTkwMTkxNjUzM15BMl5BanBnXkFtZTgwMTg5MTczMTE@._V1_UY317_CR175,0,214,317_AL_.jpg",
        phrase: "",
        starring: "Michael Shamus Wiles",
        occupation: [""],
    },
    {
        id: 41,
        name: "Donald Margolis",
        nickname: "Jane's dad",
        birthday: "",
        status: "Unknown",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/1/12/Donald_Margolis.png/revision/latest?cb=20120802212034",
        phrase: "",
        starring: "John de Lancie",
        occupation: [""],
    },
    {
        id: 42,
        name: "Clovis",
        nickname: "Clovis",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/0/0f/Clovis.JPG/revision/latest?cb=20100415221013",
        phrase: "",
        starring: "Tom Kiesche",
        occupation: [""],
    },
    {
        id: 43,
        name: "SAC Ramey",
        nickname: "SAC Ramey",
        birthday: "",
        status: "Alive",
        imageUrl: "https://res.cloudinary.com/dwvrok1le/image/upload/v1539360786/o7thsjdorobfbetqaefj.jpg",
        phrase: "",
        starring: "Todd Terry",
        occupation: [""],
    },
    {
        id: 44,
        name: "Victor",
        nickname: "Victor",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/4/48/Victor2.png/revision/latest?cb=20131009225027",
        phrase: "",
        starring: "Jeremiah Bitsui",
        occupation: [""],
    },
    {
        id: 45,
        name: "Tomás Cantillo",
        nickname: "Andrea's brother",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/e/ec/Tomas.png/revision/latest?cb=20130131043014",
        phrase: "",
        starring: "Angelo Martinez",
        occupation: [""],
    },
    {
        id: 46,
        name: "Francesca Liddy",
        nickname: "Honey Tits",
        birthday: "",
        status: "Alive",
        imageUrl: "https://res.cloudinary.com/dwvrok1le/image/upload/v1539362182/o9mstjonfn6dsdi3uij6.jpg",
        phrase: "",
        starring: "Tina Parker",
        occupation: [""],
    },
    {
        id: 47,
        name: "Cynthia",
        nickname: "Cynthia",
        birthday: "",
        status: "Alive",
        imageUrl: "https://res.cloudinary.com/dwvrok1le/image/upload/v1539362375/z63youp272k5mbqbuqj9.jpg",
        phrase: "",
        starring: "Ashley Kajiki",
        occupation: [""],
    },
    {
        id: 48,
        name: "Tortuga",
        nickname: "Tortuga",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/5/58/BBWA_Tortuga.jpg/revision/latest?cb=20131101172007",
        phrase: "",
        starring: "Danny Trejo",
        occupation: [""],
    },
    {
        id: 49,
        name: "Tim Roberts",
        nickname: "Detective Roberts",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/8/8d/2x02_-_Tim_Roberts.jpg/revision/latest?cb=20110927053954",
        phrase: "",
        starring: "Nigel Gibbs",
        occupation: [""],
    },
    {
        id: 50,
        name: "Juan Bolsa",
        nickname: "Don Juan",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/3/38/Bolsa.png/revision/latest?cb=20180825204033",
        phrase: "",
        starring: "Javier Grajeda",
        occupation: [""],
    },
    {
        id: 51,
        name: "Stacey Ehrmantraut",
        nickname: "Mike's daugter-in-law",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049",
        phrase: "",
        starring: "Kerry Condon",
        occupation: [""],
    },
    {
        id: 52,
        name: "Kaylee Ehrmantraut",
        nickname: "Mike's Granddaughter",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Kaylee.png/revision/latest?cb=20170810082843",
        phrase: "",
        starring: "Kaija Rose Bales",
        occupation: [""],
    },
    {
        id: 53,
        name: "Pamela",
        nickname: "Skyler's attorney",
        birthday: "",
        status: "Alive",
        imageUrl: "https://res.cloudinary.com/dwvrok1le/image/upload/v1539373707/bbb6muek0tcmbc3g2sog.jpg",
        phrase: "",
        starring: "Julie Dretzin",
        occupation: [""],
    },
    {
        id: 54,
        name: "Duane Chow",
        nickname: "Chow",
        birthday: "",
        status: "Dead",
        imageUrl: "https://res.cloudinary.com/dejj8n6g7/image/upload/v1674794463/BreakingBadCharacters/chow_cxptfu.jpg",
        phrase: "",
        starring: "James Ning",
        occupation: [""],
    },
    {
        id: 55,
        name: "Group Leader",
        nickname: "Counselor",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/8/81/Group_Leader_Brown_Shirt_-_Kafkaesque.png/revision/latest?cb=20131025095333",
        phrase: "",
        starring: "Jere Burns",
        occupation: [""],
    },
    {
        id: 56,
        name: "Officer Saxton",
        nickname: "Saxton",
        birthday: "",
        status: "Alive",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/f/f3/Officer_Saxton_-_I.F.T..png/revision/latest?cb=20131025090606",
        phrase: "",
        starring: "Stoney Westmoreland",
        occupation: [""],
    },
    {
        id: 57,
        name: "Jack Welker",
        nickname: "Uncle Jack",
        birthday: "",
        status: "Dead",
        imageUrl: "https://vignette.wikia.nocookie.net/breakingbad/images/c/ce/Jack5x13.png/revision/latest?cb=20130912225922",
        phrase: "",
        starring: "Michael Bowen",
        occupation: [""],
    },
]

//Agrego la palabra Unknown a las propiedades que estan vacias
dataCharacters.map(item => {
    if(item.birthday === "")
    {
        item.birthday = "Unknown"
    }
});

export default dataCharacters;