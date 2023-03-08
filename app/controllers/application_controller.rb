class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: 'homey', password: ENV['HTTP_AUTH_PASSWORD']

  skip_before_action :verify_authenticity_token
end
