const courses = []

// create arrai courses
for (let i = 1; i <= 16; i++) {
    let course = {
        cover: `${i}.jpg`,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        vote: getRandomIntInclusive(1, 5),
        popoularity: getRandomIntInclusive(1, 5),
        category: getRandomIntInclusive(1, 7),
        price: getRandomIntInclusive(1, 150),
        discount: getRandomIntInclusive(1, 20),
    }
    courses.push(course)
}

// generate random number in range
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
export default courses