# testing-lesson

UNIT 5 – AUTOMATED TESTING
5.1 Introduction
Automated tests are incredible! They allow you to save 1,000s of man hours that you would send manually testing whether your app works, but created automated tests that verify that your app works as expected. Here are some of the benefits:
- Save time: Run a full suite of automated tests in just a few seconds, rather than sitting down for a minutes to hours to test manually
- Prepare for edge cases: There may be edge cases that you would miss or wouldn’t have time to test if you were manually testing.
- Scale gracefully as your codebase and team grows: As your code base scales, you may change one thing that will have unpredictable effects on other parts of your code base. Additionally, as your developer team grows, a new developer who’s inheriting your code base might make changes that they believe are in isolation, but actually have cascading effects. In a world without tests, you might have to test every part of your system each time you made a change (which would take A LONG time).
- Only push functioning code to production: Every time a developer pushes a new pull request to be merged with your master code base, run a full suite of tests to make sure their branch is ‘green’ (passes all tests) and can be integrated into your production code base without breaking it.
5.2 Writing RSpec Tests (‘Specs’)
i. Introduction: An RSpec + Capybara + FactoryGirl test suite is all set up for you in your test environment. Rspec enables you to write model, controller, and integration/feature tests. There is a lot of debate about which combination of tests is best. In this course, we’ll be focusing on feature tests – which will enable us to test the main use cases of our app end-to-end. All of your Rspec testing related files are in your /spec folder.
ii. Types of Tests:
• Model tests: test class and instance methods and model level validations
• Feature aka ‘Integration’ tests: Test full features end to end. For example, one might test from when a person visits the homepage of your site all the way to successfully creating a user account
• Controller tests: test controller actions
• View tests: test whether the appropriate content shows up in your view
• NOTE: There are various opinions on what the right combination of tests is. We’ll be focusing on feature
tests to make sure that our functionality works end to end. A solid rule in testing is to use a combination of feature and model tests. By writing end-to-end feature tests, you’ll also test some aspects of the controller and view. If the controller and view aren’t set up correctly, then you should be able to find many of those errors via your feature tests.
iii. Writing Feature Specs:
Eg: spec/features/view_post_spec.rb # Store all feature specs in your /spec/features folder
require 'spec_helper'#always require this at the top of your require 'rails_helper'#always require this at the top of your
describe "first user visit" do#Wrap your specs in “describe ‘scenario’ do” and end that wrapping with an ‘end’ before(:each) do # code to be run before each spec in the described context.
           
31
  @user = FactoryGirl.build(:user) @category = FactoryGirl.build(:category) @post = FactoryGirl.build(:post)
end
it "has no posts" do#specific test within a larger described context
visit '/'#Capybara method that allows you to visit a particular page.13
expect(page).to have_content "Create an account to get started!"
expect(page).to_not have_content "FEATURED"#expect(something).to_have content “some-content’ is a built-in RSpec matcher14
end
end # Don’t forget to add an ‘end’ to the end of your described scenario.
iv. Factories:
• Creating Factories: Factories allow you to create pre-populated objects that you can use in your tests, as we saw above with posts, users and categories. The most popular Rails factory system is Factory Girl. Here’s an example of a spec/factories/factories.rb file.
include ActionDispatch::TestProcess#Include this at the top of your file, if you want to attach files like we did below
FactoryGirl.define do
factory :user do first_name 'Jane'
last_name 'Doe'
email 'test@example.com'
password 'f4k3p455w0rd'
avatar { fixture_file_upload(Rails.root.join('spec', 'photos', 'test.png'), 'image/png') }
end end
• Using Factories: Now that your user factory is defined, all you have to do is call FactoryGirl.create(:user) to create a new instance of a user object for testing.
v. Running Specs in your Console:
• Running all your feature specs: $ bundle exec rspec spec/features
• Running a single feature spec: $ bundle exec rspec spec/features/view_post_spec.rb
vi. Dealing with Errors: Once you run your tests, they will either show up green (meaning that they work) or show up red (producing errors). If your tests turn up red, use the information trace the error log to see what’s going wrong. Here’s an example failing spec:
Spec:
describe “visiting a non-existent page on our site” do
it "is returns an error" do
13 For more Capybara action documentation, visit: https://github.com/jnicklas/capybara
14 More on Rspec matchers: http://www.relishapp.com/rspec/rspec-expectations/v/3-1/docs/built-in-matchers
CODING FOR PRODUCT MANAGERS
        32
  visit "/a-not-known-url" end
end
Error:
Failure/Error: visit "/a-not-known-url" ActionController::RoutingError:
No route matches [GET] "/a-not-known-url"
This result of our test shows that our issue is that there is no route that matches ‘a-not-known-url’. Now we can add that route to our url file and see what happens.
5.3 Test Driven Development (TDD)
• You’ll hear the term, TDD, at some point. TDD is a style of coding where you start by writing a failing test, like in the error above, and write the simplest amount of code to get the test passing, and then refactor that code to make it even cleaner. Whether you do TDD or write code and then add ‘test coverage’ for that code is a question of individual preference. The one thing that is important is making sure that your code has full test coverage!
CODING FOR PRODUCT MANAGERS
 
33
