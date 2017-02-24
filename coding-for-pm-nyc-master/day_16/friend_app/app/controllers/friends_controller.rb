class FriendsController < ApplicationController

	def index
		# Grab data to render in the view
		@friends = Friend.all
	end

	def create
		friend = Friend.create({
			name: params[:name],
			hometown: params[:hometown],
			meeting_circumstances: params[:meeting_circumstances]	
		})

		redirect_to friend_path(friend)
	end

	def show
		@friend = Friend.find(params['id'])
	end
end