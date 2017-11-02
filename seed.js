let db = require("./models");

let citiesList = [
  {
    name: "San Francisco",
    description:
      "San Francisco was founded on June 29, 1776, when colonists from Spain established Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, all named for St. Francis of Assisi. The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time.",
    img_url:
      "http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg"
  },

  {
    name: "London",
    description:
      "London is the capital of the United Kingdom, a country in western Europe. It is also the capital of England, which is part of the United Kingdom. London lies on the Thames River. It is the largest city in the country.",
    img_url: "http://i.imgur.com/LziiBHl.jpg"
  },

  {
    name: "Atlanta",
    description:
      "Atlanta is the capital of the U.S. state of Georgia. It played an important part in both the Civil War and the 1960s Civil Rights Movement. Atlanta History Center chronicles the city's past, and the Martin Luther King Jr. ",
    img_url:
      "https://www.atlantaga.gov/Home/ShowImage?id=3728&t=636339564821530000"
  },

  {
    name: "Toronto",
    description:
      "Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. It is a dynamic metropolis with a core of soaring skyscrapers.",
    img_url:
      "https://cdn.vox-cdn.com/uploads/chorus_image/image/53976741/best-restaurants-toronto-38-lead-image-.0.0.jpg"
  }
];

let postsList = [
  {
    title: "Hang out in the Mission",
    text:
      "The Mission District is a fabulous place to spend your night. After your busy day, go relax in Dolores Park for great views of the city, and then check out the Mission’s amazing Mexican food (and overall food scene), bars, and clubs. Watch out for hipsters!",
    image: "https://static01.nyt.com/images/2008/09/14/travel/14hours600.jpg"
  },
  {
    title: "Alcatraz",
    text:
      "This former federal prison on Alcatraz Island was home to some of the worst criminals in the US. It was shut down in the 1970s and has since become a national landmark people can explore. There’s no charge to visit the island, but you’ll have to pay for the boat there. ",
    image: "https://media.nomadicmatt.com/sf3.jpg"
  },
  {
    title: "Cable Cars",
    text:
      "Riding the cable cars is an excellent way to tour the city and experience various neighborhoods in San Francisco. Catch the cable cars from Market Street. They’re fun to ride and will save you lots of time walking up and down those hills.",
    image: "https://media.nomadicmatt.com/sf10.jpg"
  },
  {
    title: "Lombard Street",
    text:
      "While riding the cable cars, make sure to get off at Lombard Street and see one of the world’s windiest streets. Watch the cars and bikers navigate the sharp turns as tourists gawk at them.",
    image: "https://media.nomadicmatt.com/sf11.png"
  },
  {
    title: "Big Ben",
    text:
      "London has many iconic buildings, landmarks and sights to be seen, whether they be old or new the city is constantly evolving and is rich in historic culture. To help you along your way if you haven’t been to the city before, we’ve created a list of the 20 must see London attractions whilst you’re there",
    image:
      "https://s3.amazonaws.com/bloglovin-user-images-prod/native-post-img-1-425-57e1af90600dc"
  },
  {
    title: "London in Winter",
    text:
      "Winter is coming, or at least that’s what John Snow keeps telling us! Well, that winter has finally reached London, minus the white walkers and the Lanisters at least. Unlike that raucous bunch in Game of Thrones, winter doesn’t have to be a scary though in London. In fact it can be a pretty magical time to explore the city. ",
    image:
      "https://s3.amazonaws.com/bloglovin-user-images-prod/native-post-img-1-425-57e1af92af33a"
  },
  {
    title: "Great Shot of London",
    text:
      "When we shared that we were headed to London we received the most incredible list of recommendations. I was blown away by not only the vast amount of recommendations but the quality of them. ",
    image:
      "https://s3.amazonaws.com/bloglovin-user-images-prod/native-post-img-1-425-57e1af9905592"
  },
  {
    title: "Best View of London",
    text:
      "If you’re looking to get a bird’s-eye view of London, there are several spots in the city that offer spectacular views. Don’t worry if you’re afraid of heights, as you’ll be sure to find a spot that fits both within your comfort level and budget.",
    image:
      "https://cdn3.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGYmxvZ2xvdmluLXVzZXItaW1hZ2VzLXByb2QlMkZuYXRpdmUtcG9zdC1pbWctMS00MjUtNTdlMWFmOWVhM2E3Zg==?checksum=63b53ea0b52a8773802a16971603880624871805&format=s"
  },
  {
    title: "Ponce City Market",
    text:
      "Ponce City Market is a mixed-use development located in a historic building in Atlanta, with national and local retail anchors, restaurants, a food hall, boutiques and offices, and residential units.",
    image:
      "https://cdn.vox-cdn.com/uploads/chorus_image/image/51720725/JTP_6268.0.0.0.jpg"
  },
  {
    title: "Atlantic Station",
    text:
      "Atlantic Station is an upscale commercial and residential area. At its heart is the open-air Atlantic Station mall, with popular fashion and home decor stores. Cultural institutions include the Millennium Gate Museum, with temporary art exhibitions, and the Robert C. Williams Paper Museum.",
    image:
      "https://www.malls.com/upload/resize_cache/iblock/0bd/700_448_28770f3828b088159f747f14acd6eb0b3/0bdc276dede6177dc5f86578731c9e4f.jpg"
  },
  {
    title: "Georgia Aquarium",
    text:
      "The Georgia Aquarium is a public aquarium in Atlanta, Georgia, USA. It houses more than a hundred thousand animals and represents several thousand species, all of which reside in 10 million US gallons of marine and salt water. ",
    image:
      "http://res.cloudinary.com/simpleview/image/upload/w_485,h_300,c_fill/crm/atlanta/i_20140417111644_ba938735-5056-b3a8-498bc5f2ffd9488a.jpg"
  },
  {
    title: "Zoo Atlanta",
    text:
      "Zoo Atlanta is an Association of Zoos and Aquariums accredited zoological park in Atlanta, Georgia. The zoo is one of four zoos in the U.S. currently housing giant pandas.",
    image:
      "http://c001af38d1d46a976912-b99970780ce78ebdd694d83e551ef810.r48.cf1.rackcdn.com/orgheaders/1456/zoo-atlanta-enterance-1500x630.jpg"
  },
  {
    title: "Toronto Island",
    text:
      "The Toronto Islands - also called the Island, or Toronto Island Park - is located in Lake Ontario, a 13-minute ferry ride from downtown Toronto. Boats to the Island leave from the Jack Layton Ferry Terminal at the foot of Bay St. and Queen’s Quay. The Island is actually a group of 15 islands inter-connected by pathways and bridges.",
    image:
      "http://media.blogto.com/articles/5333-20141007-Islands-Ferry.jpg?cmd=resize_then_crop&quality=70&w=2048&height=1365"
  },
  {
    title: "Royal Ontario Museum",
    text:
      "The Royal Ontario Museum is a museum of art, world culture and natural history in Toronto, Ontario, Canada.",
    image:
      "http://www.canadianseniors.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/u/outside.jpg"
  },
  {
    title: "View at Night",
    text:
      "Casa Loma is a Gothic Revival style house and gardens in midtown Toronto, Ontario, Canada, that is now a museum and landmark. ",
    image:
      "https://www.todocanada.ca/wp-content/uploads/Casa_Loma_Wedding_Engagement.jpg"
  },
  {
    title: "Hockey Hall of Fame",
    text:
      "The Hockey Hall of Fame is located in Toronto, Ontario, Canada. Dedicated to the history of ice hockey, it is a museum and a hall of fame.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Hockey_Hall_of_Fame.JPG"
  }
];

db.User.remove({}, function(err, removedUsers) {
  db.Post.remove({}, function(err, removedPosts) {
    db.City.remove({}, function(err, cities) {
      db.City.create(citiesList, function(err, cities) {
        if (err) {
          return console.log("ERROR seeding cities: ", err);
        }

        // for each city
        cities.forEach(function(city, index) {
          // for each of the dummy posts
          postsList.forEach(function(element) {
            // create a Post in the DB post with the _city for its corresponding city
            let newPost = {
              title: element.title,
              text: element.text,
              image: element.image,
              _city: city._id
            };
            console.log("EACH POST: ", newPost);

            db.Post.create(newPost, function(err, savedPost) {
              if (err) {
                console.log("error saving seed post: ", err);
              }
              console.log("saved seed post: ", savedPost);
            });
          });
        }); // end of cities forEach
      });
    });
  });
});
