class CreatePets < ActiveRecord::Migration[5.0]
  def change
    create_table :pets do |t|
    	t.string :name, default: "John Dog"
    	t.integer :age, null: false
    	t.string :species, null: false
    	# t.string :favorite_toy, default: 'Chew Toy'

      t.timestamps
    end
  end

end
