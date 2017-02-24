class PeopleController < ApplicationController

  def index

  end

  def create
    Person.create({
      name: person_params[:name],
      gender: person_params[:gender],
      skin_color: person_params[:skin_color]
     })
  end

  private

  def person_params
    params.permit(char_data: [:name, :skin_color, :gender])[:char_data]
  end

end

