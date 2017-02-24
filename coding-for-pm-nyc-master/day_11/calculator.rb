require 'pry'

class Calculator

	# triggers automatically when a new instance of the class
	# is created
	def initialize(num_one, num_two)
		@num_one = num_one
		@num_two = num_two
		@result = 0
	end

	def add
		@result = @num_one + @num_two

	end

	def subtract
		@result = @num_one - @num_two
	end

	def multiply
		@result = @num_one * @num_two
	end

	def divide
		@result = @num_one / @num_two
	end

	def last_result
		@result
	end
end

calc = Calculator.new(3, 5)

puts calc.add
puts calc.subtract
puts calc.multiply
puts calc.divide

Pry.start binding
