class AuthController < ApplicationController
     skip_before_action :logged_in?, only: [:login]

    def login
        # byebug
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])  #.authenticate method to check password using bcrypt
            render json: {username: user.username, token: encode_token({user_id: user.id})}
        else
            render json: {error: "Invalid username or password"}
        end
    end
end
