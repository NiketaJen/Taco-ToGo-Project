Rails.application.routes.draw do
  resources :order_menu_items
  resources :menu_items
  resources :orders
  resources :users

  post "/login", to: "auth#login"
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
