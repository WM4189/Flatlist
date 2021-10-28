class AddLikesToPlaylist < ActiveRecord::Migration[6.1]
  def change
    add_column :playlists, :likes, :integer
    add_column :playlists, :dislikes, :integer
  end
end
