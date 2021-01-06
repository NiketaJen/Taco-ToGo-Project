class ApplicationController < ActionController::API
    
    before_action :logged_in?

    def encode_token(payload)
        # byebug
        JWT.encode(payload, "F20202021tg")
    end

    def logged_in?
        headers = request.headers["Authorization"]
        token = headers.split(" ")[1]

        begin
            user_id = JWT.decode(token, "F20202021tg")[0]["user_id"]
            user = User.find(user_id)
        rescue 
            user = nil
        # ensure  #always runs with or without error
        end
       
        render json: {error: "Please log in"} unless user
    end
end
