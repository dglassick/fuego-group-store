import moment from "moment";

const today = new Date().toLocaleDateString()

export const assets = {
    imageUrl:
      'http://www.ibew.org/Portals/48/Articles/2020/2006/200610_Louisvillemovie.jpg?ver=2020-06-10-110715-120',
    imageAlt: 'Stadium Image',
    ticketTitle: `What's in the box?`,
    ticketDescription: 'With the purchase of a general admission ticket you get all inclusive access to the lower level of the stadium.',
	  matchDate: moment(today).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    stadiumChart: 'https://mcdn.ticketseating.com/450w/5456-bulldog-stadium-football.jpg',
    stadiumAlt: 'Stadium chart',
    groupName: 'Farmers Insurance LLC',
    groupDescription: `Please join us for this exhilirating game as CV Fuego takes on the Oakland Roots. As part of the night, 10 fans will be selcted at random to be given the opportunity to play on the field at halftime for a 5v5 match. Winners will get to take home a mystery prize. \n\n Please contact Christian Covarrubias at christian@cvfuego.com or at 909-909-9090 with any ticketing questions. \n\nWe look forward to serving you soon. \n\n-Central Valley Fuego Futbol Club`
  };