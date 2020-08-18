class UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params['id'])
        if user
            render json: user
        else
            render json: {message: 'User Not Found'}
        end
    end

    def create
        user = User.new(name: params[:name], username: params[:username], password_digest: params[:password_digest])
        if user.valid?
            user.save
            render json: user
        else
            render json: {
                message: user.errors.messages
            }
        end
    end


end
