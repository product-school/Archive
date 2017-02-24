class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :skin_color
      t.string :gender

      t.references :planet

      t.timestamps
    end
  end
end
