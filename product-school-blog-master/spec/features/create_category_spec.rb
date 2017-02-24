require 'spec_helper'
require 'rails_helper'

describe "category creation process" do

  it "returns me to the signup page" do
    visit '/categories/new'
    expect(page).to have_content "You need to sign in or sign up before continuing. Log in Email Password Remember me Sign up Forgot your password?"
  end

  it "creates a new category" do
   	user = FactoryGirl.create(:user)
   	visit '/categories/new'
		expect(page).to have_content "You need to sign in or sign up before continuing. Log in Email Password Remember me Sign up Forgot your password?"
   	fill_in "user_email", with: user.email
   	fill_in "user_password", with: user.password
   	click_on "Log in"
   	expect(current_path).to eq '/categories/new'
    fill_in "category_name", with: "hello"
    attach_file('category_image', File.absolute_path('./spec/photos/test.png'))
    click_on "Create Category"
    expect(Category.count).to eq 1
  end

end