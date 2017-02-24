Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # When someone makes a request to '/'
  # (homepage -- no path)
  # Respond with Static Controller, method Index
  get '/' => 'static#index'
end
