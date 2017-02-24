class Category < ActiveRecord::Base
	validates :name, :image, presence: true
	has_many :posts
  #PAPERCLIP IMAGE RELATED
  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

end
