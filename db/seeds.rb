# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
  User.destroy_all

  faker = User.create(email: 'fake@fake.fake', password: 'fakefake', birthday: 'Mar 7 1995', fname: 'Faker', lname: 'McFakerson', gender: 'Male', jobs: 'Very Real Job', schools: 'Mars University', current_city: 'San Francisco', hometown: 'Not Fake City')
  botpic = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/robot.jpg')
  faker.profpic.attach(io: botpic, filename: 'faker-avatar.jpg')
  bot_cover = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/robots-cover.jpg')
  faker.cover_photo.attach(io: bot_cover, filename: 'faker-cover.jpg')

  char = User.create(email: 'char@fire.duels', password: 'fakefake', birthday: 'Aug 23 1975', fname: 'Char', lname: 'Izard', gender: 'Female', jobs: 'Being cool', current_city: 'Cerulean')
  charpic = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/char.jpeg')
  char.profpic.attach(io: charpic, filename: 'char-avatar.jpg')
  char_cover = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/char-cover.jpg')
  char.cover_photo.attach(io: char_cover, filename: 'char-cover.jpg')

  ash = User.create(email: 'ash@hates.school', password: 'fakefake', birthday: 'May 21 1923', fname: 'Ash', lname: 'Ketchum', gender: 'Male', jobs: 'Pokemon Trainer', current_city: 'Pewter', hometown: 'Pallet Town')
  ashpic = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/ash.jpg')
  ash.profpic.attach(io: ashpic, filename: 'ash-avatar.jpg')
  ash_cover = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/ash-cover.jpg')
  ash.cover_photo.attach(io: ash_cover, filename: 'ash-cover.jpg')

  peter = User.create(email: 'normalguy@i.promise', password: 'fakefake', birthday: 'April 1 1954', fname: 'Peter', lname: 'Parker', gender: 'Male', jobs: 'nothing special', schools: 'Midtown High School', current_city: 'New York City', hometown: 'New York City')
  petepic = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/petey.jpg')
  peter.profpic.attach(io: petepic, filename: 'peter-avatar.jpg')
  pete_cover = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/pete-cover.jpg')
  peter.cover_photo.attach(io: pete_cover, filename: 'pete-cover.jpg')

  walt = User.create(email: 'justateacher@fake.fake', password: 'fakefake', birthday: 'September 7 1958', fname: 'Walter', lname: 'White', gender: 'Male', jobs: 'Chemistry teacher', schools: 'Midtown High School', current_city: 'Albuquerque', hometown: 'Albuquerque')
  waltpic = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/walter.png')
  walt.profpic.attach(io: waltpic, filename: 'walt-avatar.jpg')
  walt_cover = URI.open('https://facenook-seeds.s3.us-east-2.amazonaws.com/periodic-table.jpg')
  walt.cover_photo.attach(io: walt_cover, filename: 'walt-cover.jpg')

  Friendreq.destroy_all

  a = Friendreq.create(sender_id: 1, target_id: 2, kind: :accepted)
  b = Friendreq.create(sender_id: 1, target_id: 3, kind: :accepted)
  c = Friendreq.create(sender_id: 4, target_id: 1, kind: :accepted)
end