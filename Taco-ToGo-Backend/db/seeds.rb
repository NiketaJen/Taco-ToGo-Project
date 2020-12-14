# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 

# 1 user
# Menu Items

User.create(name: "Antonio Reid" , username: "letsfindout2020" , password_digest: "1234" )
MenuItem.create(price: 4.00 , description: "Pork marinated with pineapple and spices, cilantro, onion, grilled pineapple", name:"Al Pastor" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSExRy4b8UzCvBjJGzD8iVrWqq-S74o_NBzQg&usqp=CAU" )
MenuItem.create(price: 4.00 , description:"Grilled tilapia, cabbage, mango pico, monterey jack cheese, avocado, chipotle mayo salsa" , name: "Fish" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnltflIUk0Jum6vwghLNrQdkw-RQekeBq4RA&usqp=CAU")
MenuItem.create(price: 4.00 , description: "Chicken, cilantro, onion, queso fresco, and avocado", name: "Grilled Chicken", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR152GTHrZniJmpUChonp2lga3Vz8xjz_ZCxQ&usqp=CAU")
MenuItem.create(price: 4.50, description:"Shredded beef, cilantro, onions, radish, and cabbage" , name:"Barbacoa" , image:"https://i.imgur.com/cR8p8Yhb.jpg" )



MenuItem.create(price: 3.50, description:"Vegetarian. Egg, tortilla chips, monterey jack cheese, cilantro, tomato, onion, avocado " , name: "Migas Originales", image: "https://www.veracruzallnatural.com/wp-content/uploads/2018/03/migas_2.jpg" )
MenuItem.create(price: 4.00, description: "Vegetarian. Egg whites, mushrooms, carrots, spinach, cilantro, onion, red bell pepper, monterey jack cheese, avocado" , name: "La Reyna" , image:"https://media-cdn.tripadvisor.com/media/photo-s/0d/8a/83/6b/la-reyna-taco.jpg" )
MenuItem.create(price: 3.00, description: "Chorizo, egg, cheese" , name:"El Sancho" , image: "https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/01d7b9d4-0770-4567-bf94-b376e398b9f4/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4")
MenuItem.create(price: 4.00, description: "Vegetarian. Egg, tortilla chips, poblano peppers, red onion, queso fresco, black beans, avocado" , name: "Migas Poblanas", image: "https://cdn.vox-cdn.com/thumbor/K8FBtkKcqg-1pC_y9b2ObJCx9rA=/0x127:1520x887/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/13108669/veracruzallnatural_migasbreakfasttaco_addison.jpg" )

MenuItem.create(price: 4.50, description: "32 oz. Traditional drink from Mexico with fruit, water, and organic cane sugar served on ice" , name: "Watermelon Agua Fresca", image: "https://stressbaking.com/wp-content/uploads/2019/07/watermelon-agua-fresca-1-11.jpg" )

MenuItem.create(price: 3.50, description: "Topo Chico or Mexican Coke" , name: "Topo Chico or Mexican Coke", image: "https://cdn.shopify.com/s/files/1/0246/9457/articles/CocaChico_1024x1024.jpg?v=1562721497" )

MenuItem.create(price: 1.00, description: "Bottled Water" , name: "Bottled Water", image: "https://www.kroger.com/product/images/large/front/0002259200401" )

MenuItem.create(price: 6.50, description: "Homemade corn tortilla chips. Avocado, Tomatoes, Cilantro, Onions, Lime, Salt, Serrano pepper" , name: "Chips & Guac", image: "https://cleananddelicious.com/wp-content/uploads/2013/04/homemade-guacamole-chipC.jpg" )



