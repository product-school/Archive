require 'faker'
require 'pry'

class Friend

	# Initialize is a special method
	# It runs automatically when a new instance
	# of the class is created
	def initialize(name, age, location)
		# Within a class,
		# variables that start with an @ symbol
		# are remembered. They are attached to this
		# instance of the class
		@name = name
		@age = age
		@location = location
		@motto = Faker::ChuckNorris.fact
	end

	def about_me
		#puts "I am " + @name + " and I am " + @age + " years old."
		# puts "I am #{@name} and I am #{@age} years old."
		# Since puts always returns nil, it's best practice
		# to not use puts inside a method. It is better to
		# return teh string, and let it putsed/printed elsewhere
		"I am #{@name} and I am #{@age} years old."
	end

	# Even though to_s has a default method
	# We can over ride it with a method of our own
	def to_s
		"#{@name} is a #{@age} year old."
	end

	def puts_self
		puts self.inspect
	end

	def biography
		puts self.about_me + ' ' + self.to_s
	end

	def motto
		@motto
	end

	def cool_motto
		"I am #{@name} and I say #{motto}"
	end

	def had_a_birthday
		# @age = @age + 1
		@age += 1
	end
end


bob = Friend.new('Bob', 23, 'Manhattan')
charlie = Friend.new('Charlie', 28, 'Jersey')
fake_friend = Friend.new(Faker::Name.name, 30, 'Queens')

Pry.start(binding)

# puts bob.to_s

# puts "Now using puts on about_me:"
# puts bob.about_me

# bob.puts_self
# bob.biography

# puts bob.motto

puts fake_friend.cool_motto