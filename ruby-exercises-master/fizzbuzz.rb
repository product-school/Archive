class FizzBuzz
	attr_reader :number

	def initialize(number)
		@number = number
		if (number % 3 == 0) & (number % 5 == 0)
			puts 'fizzbuzz'
		elsif (number % 3 == 0)
			puts 'fizz'
		elsif (number % 5 == 0)
			puts 'buzz'
		else
			puts number
		end
	end

	def repeat
		puts "@number = #{@number}"
	end

end

def buzz(number)
	puts "#{number} buzz!!"
end

def fizz_buzz_cleaned_up(number)
	returned_object = ''
	returned_object += (number % 3 == 0) ? 'fizz' : ''
	returned_object += (number % 5 == 0) ? 'buzz' : ''
	returned_object += (returned_object.length == 0) ? "#{number}" : '' 
	puts returned_object 
end

#NOTE: Accessing ruby files from your terminal
#to access a ruby document in your terminal, cd into the folder where your file is stored and enter: irb -r ./your_file_name.rb