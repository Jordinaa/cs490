function init(){
    var hotel_1=new Hotel("Park",120,77); //Create objects
    var hotel_2=new Hotel("Quay",40,25);
    
    console.log(hotel_1.checkAvailability()); //call functions
    console.log(hotel_2.checkAvailability());
}

//Hotel class constructor
function Hotel(name, rooms, booked) { 
    this.name = name;
    this.rooms=rooms;
    this.booked=booked;
}

Hotel.prototype.checkAvailability = function () {
    return this.rooms - this.booked;
};

