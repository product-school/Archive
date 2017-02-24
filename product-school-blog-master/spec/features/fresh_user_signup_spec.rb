require 'spec_helper'
require 'rails_helper'

describe "first user visit" do
  before(:each) do
    @user = FactoryGirl.build(:user)
    @category = FactoryGirl.build(:category)
    @post = FactoryGirl.build(:post)
  end

  it "has no posts" do
    visit '/'
    expect(page).to have_content "Create an account to get started!"
    expect(page).to_not have_content "FEATURED"
  end

  it "user signups up and creates first blog posts" do
    visit '/'
    click_link "Let's Do It!"
    fill_in 'user_first_name', with: @user.first_name
    fill_in 'user_last_name', with: @user.last_name
    fill_in 'user_email', with: @user.email
    fill_in 'user_password', with: @user.password
    fill_in 'user_password_confirmation', with: @user.password
    attach_file('user_avatar', File.absolute_path('./spec/photos/test.png'))
    click_on "Sign up"
    expect(page).to have_content "Welcome! You have signed up successfully."
    visit '/categories/new'
    fill_in "category_name", with: @category.name
    attach_file('category_image', File.absolute_path('./spec/photos/test.png'))
    click_on "Create Category"
    expect(Category.count).to eq 1
    click_on "Write a Post"
    fill_in 'post_title', with: @post.title
    fill_in 'post_intro', with: @post.intro
    fill_in 'post_body', with: @post.body
    attach_file('post_image', File.absolute_path('./spec/photos/test.png'))
    select @category.name, from: 'post_category_id'
    click_on "Create Post"
    expect(current_path).to eq "/posts/#{Post.last.id}"
    within('.body-container h1') do
      expect(page).to have_content "#{@post.title}"
    end
    visit "/"
      within('#featured-blog-entry') do
      expect(page).to have_content "#{@post.title}"
      expect(page).to have_content "FEATURED"
    end
    expect(page).to_not have_content "MOST RECENT"
  end 

end