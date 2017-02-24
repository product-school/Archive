Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # if we get a request to the root path
  # send them to the static controller
  # and use its home method
  #get '/' => 'static#home'
  root to: 'static#home'

  get '/about_me' => 'static#about_me'
  get '/forbidden' => 'static#forbidden'

  resources :friends, only: [:index, :new, :create, :show]
end
