Rails.application.routes.draw do
  devise_for :users
  root "static_pages#home"
  
  # namespace :admin do
  #   resources :materials, except: :show
  # end

  namespace :admin do
    resources :materials, except: :show
    resources :categories, except: :show
    resources :recycle_centers do 
      collection do
        get :country_states
        get :country_states_city
      end

      member do
        post :create_material
      end
    end
  end
end
