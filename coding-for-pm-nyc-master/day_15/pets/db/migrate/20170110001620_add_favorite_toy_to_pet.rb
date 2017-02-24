class AddFavoriteToyToPet < ActiveRecord::Migration[5.0]
  def change
  	# first argument is the table name
  	# second argument is the column name
  	# third argument is the data type

  	add_column :pets, :favorite_toy, :string
  	# add_default :pets, :favorite_toy, 'Chew Toy'
  end
end
