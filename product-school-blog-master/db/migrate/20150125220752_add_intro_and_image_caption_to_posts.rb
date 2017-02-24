class AddIntroAndImageCaptionToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :intro, :text
    add_column :posts, :caption, :string
  end
end
