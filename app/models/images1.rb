class Images
  require 'flickraw'

  def initialize
    FlickRaw.api_key="fa375f204ca300fd95aed5e167deece2"
    FlickRaw.shared_secret="ad6ba1b0dc636c5a"
  end

  def list 
    list   = flickr.photos.getRecent
  end

  # id     = list[0].id
  # secret = list[0].secret
  # info = flickr.photos.getInfo :photo_id => id, :secret => secret

  # puts info.title           # => "PICT986"
  # puts info.dates.taken     # => "2006-07-06 15:16:18"

  # sizes = flickr.photos.getSizes :photo_id => id

  # original = sizes.find {|s| s.label == 'Original' }
  # puts original.width       # => "800" -- may fail if they have no original marked image
end