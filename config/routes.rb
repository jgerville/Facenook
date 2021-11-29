Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resources :friendreqs, only: [:create, :show, :update, :destroy]
    get "/friendreqs/by_user/:id", to: "friendreqs#show_related_friendreqs", as: "show_related_friendreqs"
    resource :session, only: [:create, :destroy]
  end

  match "/*path", to: "static_pages#other", via: :all
end
