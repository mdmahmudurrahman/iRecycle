class Admin::MaterialsController < ApplicationController
  before_action :load_material, only: %i(edit update destroy)
  
  def index
    @materials = Material.all
    @material_count = @materials.count
    @material = Material.new
    @categories = Category.all
  end

  def new
  end

  def create
    @material = Material.new material_params

    if @material.save
      flash["success"] = "Category saved successfully"
    else
      flash["warning"] = @material.errors.full_messages.join(" ,")
    end

    redirect_to admin_materials_path
  end

  def update
    binding.pry
    @material.update material_params
    respond_to do |format|
      format.js
    end
  end

  def destroy
    if @material.destroy
      flash[:success] = "Category deleted"
    else
      flash[:danger] = "Not deleted"
    end
    redirect_to admin_materials_path
  end

  def load_material
    @material = Material.find_by id: params[:id]
    render unless @material
  end

  def material_params
    params.require(:material).permit :name, :description, :category_id
  end
end
