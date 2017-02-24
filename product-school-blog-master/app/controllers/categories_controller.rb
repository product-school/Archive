class CategoriesController < ApplicationController
	before_filter :authenticate_user!

	def index
		@categories = Category.all
	end

	def new
		@category = Category.new()
	end

	def edit
		@category = Category.find(params[:id])
	end

	def update
		@category = Category.find(params[:id])
		if @category.update_attributes(category_params)
			redirect_to categories_path
		else
    		render :action => "edit" 
	   end
	end

	def create
		@category = Category.create(category_params)
		if @category.valid?
	      flash[:success] = "Your category was saved!" 
	      redirect_to categories_path
	    else
	      flash[:error] = "Your category could not be saved. please try again."
	      render "new"
	    end
	end

	def category_params
	  params.require(:category).permit(:image, :name)
	end
end
