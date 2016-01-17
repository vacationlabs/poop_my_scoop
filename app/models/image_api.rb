class ImageApi
  BASE_URL_PARTIAL1 = "https://farm"
  BASE_URL_PARTIAL2 = ".staticflickr.com"
  BASE_THUMBNAIL_PARTIAL = "_t.jpg"
  BASE_MEDIUM_PARTIAL = ".jpg" # gets image with width 640
  BASE_SQUARE_PARTIAL = "_s.jpg"
  def initialize
    FlickRaw.api_key="fa375f204ca300fd95aed5e167deece2"
    FlickRaw.shared_secret="ad6ba1b0dc636c5a"
  end

  def self.list
    list = flickr.photos.getRecent
  end

  # gets thumbna  il link
  def self.get_t_link(i)
    "#{BASE_URL_PARTIAL1}#{i.farm}#{BASE_URL_PARTIAL2}/#{i.server}/#{i.id}_#{i.secret}#{BASE_THUMBNAIL_PARTIAL}"
  end
  # get square image
  def self.get_s_link(i)
    "#{BASE_URL_PARTIAL1}#{i.farm}#{BASE_URL_PARTIAL2}/#{i.server}/#{i.id}_#{i.secret}#{BASE_SQUARE_PARTIAL}"
  end

  # gets medium image link
  def self.get_m_640_link(i)
    "#{BASE_URL_PARTIAL1}#{i.farm}#{BASE_URL_PARTIAL2}/#{i.server}/#{i.id}_#{i.secret}#{BASE_MEDIUM_PARTIAL}"
  end

  def self.conver_to_flickr_params(search_params)
    f_params = {
      :page =>  search_params[:page],
      :per_page => search_params[:per_page],
      :text => search_params[:text]
    }
    f_params
  end

  # search param page, page_count, tags
  def self.search(search_params)
    flickr.photos.search(search_params)
  end

  # get image info
  def self.get_images(search_params)
    params = self.conver_to_flickr_params(search_params)
    images_info = self.search(search_params)
    image_arr_hash = []
    images_info.each do |i|
      img_hash = {
        :id => i.id,
        :image_m_link => ImageApi.get_m_640_link(i),
        :image_t_link => ImageApi.get_t_link(i),
        :image_s_link => ImageApi.get_s_link(i),
        :title => i.title,
      }
      image_arr_hash.push(img_hash)
    end
    image_arr_hash
  end

end