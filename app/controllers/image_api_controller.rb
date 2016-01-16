class ImageApiController < ApplicationController
  def index
    render 
  end

  def fetch_images
    params[:page_count] = 10
    params[:page] = 1 if params[:page].blank?
    raise "search text not provided " if params[:text].blank?
    images_arr = ImageApi.get_images(params)
    respond_to do |format|
      # format.html render nothing: true
      format.json { render json: images_arr.as_json }
    end
  end
end