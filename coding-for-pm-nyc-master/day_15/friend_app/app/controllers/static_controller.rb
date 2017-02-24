# Create a class called StaticController
# It should inherit from ApplictionController
# Meaning, it has access to to anything that ApplicationController has.
class StaticController < ApplicationController
	# Because Rails is all convention, and having things "just work"
	# We have to follow its rules:
		# Our file name must be the controller, with under scores
		# and in our the controller directory

	def home
		# Because the controller is named static, it will expect there
		# to be a directory named "static" in the app/views directory
		# and it will expect to find a file called "home.html.erb" in that directory
	end

	def about_me
		@visible_paragraph = [0, 1].sample
	end

	def forbidden
		# if the user is not logged in, redirect
		# if the user is not an admin, redirect
		
		redirect_to root_path
	end
end