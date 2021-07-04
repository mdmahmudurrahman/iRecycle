require "test_helper"

class Admin::RecycleCentersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_recycle_centers_index_url
    assert_response :success
  end
end
