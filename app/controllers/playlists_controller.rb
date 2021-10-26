class PlaylistsController < ApplicationController
    before_action :set_playlist, only: [:show, :update, :destroy]
    before_action :authorize_user, only: [:update, :destroy]
  
    def index
      render json: Playlist.all#, each_serializer: PlaylistIndexSerializer
    end
  
    def show
      render json: @playlist
    end
  
    def create
      playlist = current_user.playlists.build(playlist_params)
      if playlist.save
        render json: playlist, status: :created
      else
        render json: playlist.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @playlist.update(playlist_params)
        render json: @playlist, status: :ok
      else
        render json: @playlist.errors, status: :unprocessable_entity
      end
    end

    def destroy
        @playlist.destroy
    end

    private

  def playlist_params
    params.permit(:name, :songs, :favorite, :user_id)
  end

  def set_playlist
    @playlist = Playlist.find(params[:id])
  end

  def authorize_user
    user_can_modify = current_user.admin? || @playlist.user == current_user
    if !user_can_modify
      render json: { error: "You don't have permission to perform that action" }, status: :forbidden
    end
  end
end
