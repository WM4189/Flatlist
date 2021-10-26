class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :songs, :favorite
  has_one :user
end
