Rails.application.routes.draw do
  root "static_pages#home"
  
  namespace :admin do
    get 'materials/index'
    get 'materials/new'
    get 'materials/edit'
  end

  namespace :admin do
    get 'categories/index'
    get 'categories/new'
    get 'categories/edit'
  end
end
