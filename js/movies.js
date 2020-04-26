let movies = [
	{
		name: "Avengers: Endgame",
		rating: "8.4/10",
		duration: "3h 2m",
		synopsis: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
	},
	{
		name: "Mulan",
		rating: "6.8/10",
		duration: "2h 5m",
		synopsis: "To save her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man to battle northern invaders in China."
	},
	{
		name: "Sonic the Hedgehog",
		rating: "6.6/10",
		duration: "1h 40m",
		synopsis: "The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now, it's supervillain vs. supersonic in an all-out race across the globe to stop Robotnik from using Sonic's unique power to achieve world domination."
	},
	{
		name: "The SpongeBob Movie: Sponge on the Run",
		rating: "7.9/10",
		duration: "1h 46m",
		synopsis: "SpongeBob and Patrick travel to the lost city of Atlantic City to solve the mysterious kidnapping of Gary the snail. They soon prove that there's nothing stronger than the power of friendship as they encounter danger and delight at every turn."
	},
	{
		name: "Free Guy",
		rating: "8.4/10",
		duration: "1h 50m",
		synopsis: "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline."
	}
];

let prices = [
	{
		name: "kids",
		price: 100
	},
	{
		name: "regular",
		price: 150
	},
	{
		name: "senior",
		price: 120
	}

];



function listProducts(prods) {
  let product_names = [];
  for (let i=0; i<prods.length; i+=1) {
   product_names.push(prods[i].name);
  }
  return product_names;
}
console.log(listProducts(products));
function totalValue(prods) {
  let inventory_value = 0;
  for (let i=0; i<prods.length; i+=1) {
    inventory_value += prods[i].inventory * prods[i].unit_price;
  }
  return inventory_value;
}
console.log(totalValue(products));