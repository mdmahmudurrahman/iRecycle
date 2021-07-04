class Admin::CategoriesController < ApplicationController
  before_action :load_category, only: %i(edit update destroy)

  def index
    @categories = Category.all
    @category_count = @categories.count
    @category = Category.new
  end

  def new
  end

  def create
    @category = Category.new category_params

    if @category.save
      flash["success"] = "Category saved successfully"
    else
      flash["warning"] = @category.errors.full_messages.join(" ,")
    end

    redirect_to admin_categories_path
  end

  # def edit
  #   respond_to do |format|
  #     format.js
  #   end
  # end

  def update
    binding.pry
    @category.update category_params
    respond_to do |format|
      format.js
    end
    # redirect_back fallback_location: admin_categories_path
    # redirect_to admin_categories_path
  end

  def destroy
    if @category.destroy
      flash[:success] = "Category deleted"
    else
      flash[:danger] = "Not deleted"
    end
    redirect_to admin_categories_path
  end

  def load_category
    @category = Category.find_by id: params[:id]
    render unless @category
  end

  def category_params
    params.require(:category).permit :title, :description
  end
end
