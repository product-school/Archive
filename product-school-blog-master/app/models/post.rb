class Post < ActiveRecord::Base
	validates :title, :body, :user_id, :category_id, :intro, :image, presence: true
	belongs_to :user
	belongs_to :category
  #PAPERCLIP IMAGE RELATED
  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

	def next
	  Post.where("posts.id > ?", self.id).order("posts.id ASC").last
	end

	def previous
	  Post.where("posts.id < ?", self.id).order("posts.id DESC").last
	end

end
