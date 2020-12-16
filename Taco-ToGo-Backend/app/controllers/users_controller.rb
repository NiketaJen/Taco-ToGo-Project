class UsersController < ApplicationController

    def show
        user = User.find_by(id: params['id'])
        if user
            render json: user
        else
            render json: {error: 'User Not Found'}, status: :not_acceptable
        end
    end

    def create
        user = User.new(user_params)
        if user.valid?
            user.save
            render json: user
        else
            render json: {error: "Failed to create a user"}, status: :not_acceptable
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password)
    end


end
