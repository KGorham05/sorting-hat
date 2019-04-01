
const friendsArray = [
  {
    name: "Person 1",
    photo: "https://image.shutterstock.com/image-photo/monkey-face-close-260nw-220510171.jpg",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Person 2",
    photo: "https://media.wired.com/photos/593287bea312645844995a16/master/w_799,c_limit/Cercopithecus-mona-W-Allen.jpg",
    scores: [
      3,
      2,
      3,
      3,
      3,
      2,
      5,
      2,
      3,
      3
    ]
  },
  {
    name: "Person 3",
    photo: "https://images.unsplash.com/photo-1525290452507-49365ef84293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    scores: [
      1,
      5,
      4,
      1,
      4,
      5,
      4,
      1,
      2,
      5
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

