class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :songs, :favorite, :likes, :dislikes
  has_one :user
end
