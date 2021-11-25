# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all

  faker = User.create(email: 'fake@fake.fake', password: 'fakefake', birthday: 'Mar 7 1995', fname: 'Faker', lname: 'McFakerson', gender: 'Male', jobs: 'Very Real Job', schools: 'Mars University', current_city: 'San Francisco', hometown: 'Not Fake City')
  char = User.create(email: 'char@fire.duels', password: 'fakefake', birthday: 'Aug 23 1975', fname: 'Char', lname: 'Izard', gender: 'Female', jobs: 'Being cool', current_city: 'Cerulean')
  ash = User.create(email: 'ash@hates.school', password: 'fakefake', birthday: 'May 21 1923', fname: 'Ash', lname: 'Ketchum', gender: 'Male', jobs: 'Pokemon Trainer', current_city: 'Pewter', hometown: 'Pallet Town')
  peter = User.create(email: 'normalguy@i.promise', password: 'fakefake', birthday: 'April 1 1954', fname: 'Peter', lname: 'Parker', gender: 'Male', jobs: 'nothing special', schools: 'Midtown High School', current_city: 'New York City', hometown: 'New York City')
end