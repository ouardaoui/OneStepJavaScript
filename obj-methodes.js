let restaurant ={
    name:'LetsHaveFun',
    guestcapacity:100,
    guestcount:0,
    chekvailability:function(partySize){
        let seatsLeft =this.guestcapacity-this.guestcount
        return partySize <= seatsLeft
    },
    SeatParty:function(partySize){
        this.guestcount=this.guestcount+partySize
    },
    removeParty:function(partySize){
        this.guestcount=this.guestcount-partySize
    }

}
restaurant.SeatParty(98)
console.log(restaurant.chekvailability(4))
restaurant.removeParty(5)
console.log(restaurant.chekvailability(4))
