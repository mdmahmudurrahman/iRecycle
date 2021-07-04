class Admin::RecycleCentersController < ApplicationController
  before_action :load_recycle_center, only: %i(edit update destroy show create_material)
  
  def index
    @recycle_centers = RecycleCenter.all
    @recycle_center_count = @recycle_centers.count
    @recycle_center = RecycleCenter.new
    load_country
  end

  def new
  end

  def create
    @recycle_center = RecycleCenter.new recycle_center_params
    if @recycle_center.save
      flash["success"] = "Category saved successfully"
    else
      flash["warning"] = @recycle_center.errors.full_messages.join(" ,")
    end

    redirect_to admin_recycle_centers_path
  end

  def show
    @material_count = @recycle_center.materials.count
    @material = Material.new
    @materials = Material.all
    @disabled_options = @recycle_center.materials
    @material_options = Material.material_options(@materials).to_json
  end

  def update
    @recycle_center.update recycle_center_params
    respond_to do |format|
      format.js
    end
  end

  def destroy
    if @recycle_center.destroy
      flash[:success] = "Category deleted"
    else
      flash[:danger] = "Not deleted"
    end
    redirect_to admin_recycle_centers_path
  end

  def country_states
    @states = CS.get params[:country_key]
    render json: { states: @states }
  end

  def country_states_city
    @cities = CS.get(params[:country_key], params[:state_key])
    render json: { cities: @cities }
  end

  def create_material
    @materials = Material.where(id: params[:material][:materials_ids].reject!(&:empty?))
    @recycle_center.materials << @materials
    redirect_to admin_recycle_center_path(@recycle_center)
  end

  private

  def load_recycle_center
    @recycle_center = RecycleCenter.find_by id: params[:id]
    render unless @recycle_center
  end

  def recycle_center_params
    params.require(:recycle_center).permit :name, :country, :state, :city, :street
  end

  def load_country
    @countries = CS.countries.invert
  end  
end
