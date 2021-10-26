class User < ApplicationRecord
    has_many :playlists

    validates :username, uniqueness: true
    validates :email, uniqueness: true, allow_blank: true
    
    has_secure_password
end
