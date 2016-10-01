var aniPlaza={
    name: 'Ani Plaza Hotel',
    mainPhoto: 'images/aniplaza.jpg',
    address: "Armenia, 0001, Yerevan Sayat-Novai Ave., 19 Building",
    description1: "This high-end downtown hotel is a 6-minute walk from the Yerevan Opera Theater, a 9-minute walk from a metro station and a 15-minute walk from the Cascade stairway.", 
    description2: "Casual rooms and upmarket suites come with free Wi-Fi, satellite TV and minibars; room service is available. Upgraded quarters add city views.",
    description3: "Breakfast and parking are complimentary, and there's a European restaurant and a cafe. There are 2 bars, 1 in a courtyard with a fountain, plus an indoor pool, a sauna and a fitness center.",
    photos: ['images/aniplaza1.jpg','images/aniplaza2.jpg','images/aniplaza3.jpg']
}
var tufenkian={
    name: 'Tufenkian Historic Yerevan Hotel',
    mainPhoto: 'images/tufenkian.jpg',
    address: "Armenia, 0010, Yerevan Hanrapetutyan St., 48 Building",
    description1: "Located between Hanrapetutyan and Buzand streets, this classic hotel in a building reflecting Yerevan architecture of the 19th and 20th-centuries is a 6 minute-walk from the Republic Square and 4 km from the Matenadaran library.", 
    description2: "The warm rooms feature tea and coffeemakers and satellite TVs, plus minifridges. The suites have lounges, balconies and scenic city views. Room service is available.",
    description3: "Amenities include a restaurant serving Western and Eastern Armenian cuisine. There's a seated terrace, a bar/lounge and an outdoor cafe. There's also an indoor pool and a sauna. Parking is available.",
    photos: ['images/tufenkian1.jpg','images/tufenkian2.jpg','images/tufenkian3.jpg']
}
var multirest={
    name: 'Multi Rest House',
    mainPhoto: 'images/multirest.jpg',
    address: "Armenia, 2310, Kotayk Marz, Tsaghkadzor Olympiakan St., 8 Building",
    description1: 'Multi Rest House" resort offers a long list of different and interesting services to the guests. Comfortably and modernly designed rooms and very nice cottages are at your disposal. Various services will help you to fill your days at the resort with unforgettable moments.', 
    description2: "The following facilities are available here: fitness center, internet cafe, indoor pool, cinema center, football, basketball, tennis, billiard, conference hall for 80 persons, bar and restaurant, etc.",
    description3: "Golden Lion Restaurant serves Armenian cuisine, as well as Mexican and European dishes. The fully stocked bar offers drinks and cocktails.",
    photos: ['images/multirest1.jpg','images/multirest2.jpg','images/multirest3.jpg']
}
var doubletree={
    name: 'Doubletree by Hilton Yerevan City Centre',
    mainPhoto: 'images/doubletree.jpg',
    address: "Armenia, 0015, Yerevan Grigor Lusavorchi St., 4/2 Building",
    description1: 'A free bottle of water awaits you on arrival. All hotel guests have free access to the sauna. During your stay, you can park for free at the hotel. Late check-out is possible for free on request.', 
    description2: "Car rental is available at our hotel. Just ask the knowledgeable team at the reception whenever you like.",
    description3: "Enjoy your yummy evening meal in the relaxing surroundings of the restaurant, and then meet family or friends at the lively bar.",
    photos: ['images/doubletree1.jpg','images/doubletree2.jpg','images/doubletree3.jpg']
}
var tsmariott={
    name: 'Tsaghkadzor Marriott Hotel',
    mainPhoto: 'images/tsmariott.jpg',
    address: "Armenia, 2310, Kotayk Marz, Tsaghkadzor Tandzaghbyuri St., 2 Building, №4/1",
    description1: 'This hotel rooms all have AC as well as a minibar, a desk, cable TV and coffee making equipment. Hotel also provides international newspapers in the rooms. In every room our hotel offers a safe. A refrigerator is included in your room.', 
    description2: "For your convenience soft bathrobes await you in your room's bathroom. You can slip one on after you're done showering and then dry your hair with the hand-held hair-dryer provided.",
    description3: "Hotel offers a sauna and hot tub for the enjoyment of its visitors. Hotel provides its guests with their own sauna. A tanning shop is also included.",
    photos: ['images/tsmariott1.jpg','images/tsmariott2.jpg','images/tsmariott3.jpg']
}
var alexandrapol={
    name: 'Alexandrapol Hotel Palace',
    mainPhoto: 'images/alexandrapol.jpg',
    address: "Armenia, 3104, Shirak Marz, Gyumri Mayakovsku St., 70 Building",
    description1: 'Located in the centre of Gyumri, Alexandrapol Palace Hotel features free WiFi and free parking.', 
    description2: "The rooms offer air conditioning, a minibar, hairdryer, working area and flat-screen TV with cable channels.",
    description3: "Guests can dine in the property’s restaurant, or eat out in the cafes and restaurants nearby. There is also a bar on site.",
    photos: ['images/alexandrapol1.jpg','images/alexandrapol2.jpg','images/alexandrapol3.jpg']
}
var kechi={
    name: 'Kechi Resort',
    mainPhoto: 'images/kechi.jpg',
    address: "Armenia, 0009, Tsakhkadzor, Khachatur Kechareci Street 4",
    description1: 'Situated in the heart of Tsakhadzor, the Kechi Resort is conveniently located just 800 metres from the ski lift. This mountainside hotel offers ski storage space, rooms with great views and free Wi-Fi in public areas.', 
    description2: "Satellite TV, a seating area and a balcony with mountain views are offered in the Kechi’s simply decorated rooms. An electric kettle and kitchenware are also included.",
    description3: "The Kechi Tsakhadzor is the perfect base for outdoor activities such as skiing and horse riding. Guests are also welcome to enjoy the hotel’s on-site facilities, which include table tennis, darts and a children’s playground.",
    photos: ['images/kechi1.jpg','images/kechi2.jpg','images/kechi3.jpg']
}
var elegant={
    name: 'Elegant Hotel & Resort',
    mainPhoto: 'images/elegant.jpg',
    address: "Armenia, 2310, Tsakhkadzor, Tandzaghbyur street 11",
    description1: 'Featuring a panoramic view of the Tsaghkadzor Valley, Elegant Hotel & Resort offers a restaurant, a bar and a terrace. After a long day of hiking or skiing, guests can relax in the indoor pool and the sauna.', 
    description2: "With views over the mountains, each room here will provide you with air conditioning, a balcony and a minibar. A satellite TV with satellite channels and free WiFi access are available.",
    description3: "The restaurant on site serves gourmet-style dishes.",
    photos: ['images/elegant1.jpg','images/elegant2.jpg','images/elegant3.jpg']
}
var hotels=[aniPlaza, tufenkian, multirest, doubletree, tsmariott, alexandrapol, kechi, elegant];

var row=$(".hotels")[0];

hotels.forEach(function(item, index) {
    
    row.innerHTML+='<div class="col-md-4 col-sm-6 col-xxs-12 animate-box">'+
        '<a type="button" class="fh5co-project-item" data-toggle="modal" data-target="#modal-'+index+'">'+
            '<img src="'+item.mainPhoto+'" alt="Image" class="img-responsive main-img">'+
            '<div class="fh5co-text">'+
                '<h2>'+item.name+'</h2>'+
                '<p>'+item.address+'</p>'+
            '</div>'+
        '</a>'+
    '</div>'+
    '<div class="modal" id="modal-'+index+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
        '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
            '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                    '<span aria-hidden="true">&times;</span></button>'+
                '<h4 class="modal-title" id="myModalLabel">'+item.name+'</h4>'+
            '</div>'+
            '<div class="modal-body">'+
                '<p>'+item.description1+'</p>'+
                '<p>'+item.description2+'</p>'+
                '<p>'+item.description3+'</p>'+
                '<a href="'+item.photos[0]+'" class="image-popup">'+
                    '<img src="'+item.photos[0]+'" width="100" alt="Image">'+
                '</a>'+
                '<a href="'+item.photos[1]+'" class="image-popup">'+
                    '<img src="'+item.photos[1]+'" width="100" alt="Image">'+
                '</a>'+
                '<a href="'+item.photos[2]+'" class="image-popup">'+
                    '<img src="'+item.photos[2]+'" width="100" alt="Image">'+
                '</a>'+
                '<p>FOR BOOKING PLEASE CALL...</p>'+
                '<p>'+
                    '<a href="tel:+37441506041">+374 41 50 60 41</a>'+
                    '<a href="tel:+37498803500">+374 98 80 35 00</a>'+ 							
                    '<a href="tel:+37498803500">+374 94 60 34 00</a>'+
                '</p>'+
            '</div>'+
            '<div class="modal-footer">'+
                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
            '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

});