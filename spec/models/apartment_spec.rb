require 'rails_helper'

RSpec.describe Apartment, type: :model do
  let(:user) { User.create email: 'sarah@test.com', password: '123456', password_confirmation: '123456' }

  it 'should have a valid street' do
    apartment = user.apartments.create(
      city: 'London', 
      state: 'England', 
      manager: 'Ms. Hudson', 
      email: 'mzhud@email.com', 
      price: '1000', 
      bedrooms: 2, 
      bathrooms: 2, 
      pets: 'no',
      image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
    )
    expect(apartment.errors[:street]).to include "can't be blank"
    expect(apartment.errors[:street]).to_not be_empty
    end
  it 'should have a valid city' do
    apartment = user.apartments.create(
      street: '123 Street', 
      state: 'England', 
      manager: 'Ms. Hudson', 
      email: 'mzhud@email.com', 
      price: '1000', 
      bedrooms: 2, 
      bathrooms: 2, 
      pets: 'no',
      image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
    )
    expect(apartment.errors[:city]).to include "can't be blank"
    expect(apartment.errors[:city]).to_not be_empty
  end
  it 'should have a valid state' do
    apartment = user.apartments.create(
      city: 'London', 
      street: '123 Street', 
      manager: 'Ms. Hudson', 
      email: 'mzhud@email.com', 
      price: '1000', 
      bedrooms: 2, 
      bathrooms: 2, 
      pets: 'no',
      image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
    )
    expect(apartment.errors[:state]).to include "can't be blank"
    expect(apartment.errors[:state]).to_not be_empty
  end
  it 'should have a valid manager' do
    apartment = user.apartments.create(
      city: 'London', 
      street: '123 Street', 
      state: 'CA', 
      email: 'mzhud@email.com', 
      price: '1000', 
      bedrooms: 2, 
      bathrooms: 2, 
      pets: 'no',
      image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
    )
    expect(apartment.errors[:manager]).to include "can't be blank"
    expect(apartment.errors[:manager]).to_not be_empty
end
it 'should have a valid email' do
  apartment = user.apartments.create(
    city: 'London', 
    street: '123 Street', 
    state: 'CA', 
    manager: 'Dawit', 
    price: '1000', 
    bedrooms: 2, 
    bathrooms: 2, 
    pets: 'no',
    image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
  )
  expect(apartment.errors[:email]).to include "can't be blank"
  expect(apartment.errors[:email]).to_not be_empty
end
it 'should have a valid price' do
  apartment = user.apartments.create(
    city: 'London', 
    street: '123 Street', 
    state: 'CA', 
    email: 'mzhud@email.com', 
    manager: 'Dawit', 
    bedrooms: 2, 
    bathrooms: 2, 
    pets: 'no',
    image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
  )
  expect(apartment.errors[:price]).to include "can't be blank"
  expect(apartment.errors[:price]).to_not be_empty
end
it 'should have a valid bedrooms' do
  apartment = user.apartments.create(
    city: 'London', 
    street: '123 Street', 
    state: 'CA', 
    manager: 'Dawit',
    email: 'mzhud@email.com', 
    price: '1000', 
    bathrooms: 2, 
    pets: 'no',
    image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
  )
  expect(apartment.errors[:bedrooms]).to include "can't be blank"
  expect(apartment.errors[:bedrooms]).to_not be_empty
end
it 'should have a valid bathrooms' do
  apartment = user.apartments.create(
    city: 'London', 
    street: '123 Street', 
    state: 'CA', 
    manager: 'Dawit',
    email: 'mzhud@email.com', 
    price: '1000', 
    bedrooms: 2, 
    pets: 'no',
    image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
  )
  expect(apartment.errors[:bathrooms]).to include "can't be blank"
  expect(apartment.errors[:bathrooms]).to_not be_empty
end
it 'should have a valid pets' do
  apartment = user.apartments.create(
    city: 'London', 
    street: '123 Street', 
    state: 'CA', 
    manager: 'Dawit',
    email: 'mzhud@email.com', 
    price: '1000', 
    bedrooms: 2, 
    bathrooms:2,
    image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg'
  )
  expect(apartment.errors[:pets]).to include "can't be blank"
  expect(apartment.errors[:pets]).to_not be_empty
end
it 'should have a valid image' do
  apartment = user.apartments.create(
    city: 'London', 
    street: '123 Street', 
    state: 'CA', 
    manager: 'Dawit',
    email: 'mzhud@email.com', 
    price: '1000', 
    bedrooms: 2, 
    bathrooms:2,
    pets: 'no'
  )
  expect(apartment.errors[:image]).to include "can't be blank"
  expect(apartment.errors[:image]).to_not be_empty
end 
end
