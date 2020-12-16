class User < ApplicationRecord
    has_secure_password
    
    has_many :orders

    validates :name,:password_digest, presence: true
    validates :username, uniqueness: true
end
