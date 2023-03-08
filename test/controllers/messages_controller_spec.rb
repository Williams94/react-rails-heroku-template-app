require 'rails_helper'
require 'spec_helper'

RSpec.describe "API V1 Messages", type: :request do
  let(:http_auth_header) {
    {
      'HTTP_AUTHORIZATION' => ActionController::HttpAuthentication::Basic.encode_credentials(
        'homey',
        ENV['HTTP_AUTH_PASSWORD']
      )
    }
  }

  describe "POST /messages" do
    context "valid params" do
      let(:valid_params) {{
        message: {
          message_body: "Fake Message"
        }
      }}

      it "creates a new message with the correct attributes" do
        post(
          "/messages",
          params: valid_params,
          headers: http_auth_header
        )
        expect(Message.last).to have_attributes valid_params[:message]
      end
    end

    context "invalid params" do
      let(:invalid_params) {{ body: "Fake Message" }}

      it "does not create a new message" do
        expect {
          post "/messages", params: invalid_params, headers: http_auth_header
        }.to raise_error(ActionController::ParameterMissing, /message/)
      end
    end
  end

  describe "GET /messages" do
    let(:parsed_response) { JSON.parse(response.body) }

    before do
      3.times do |i|
        Message.new(message_body: "Test #{i}").save!
      end
      get "/messages", headers: http_auth_header
    end

    it "returns all messages" do
      expect(parsed_response.count).to eq 3
    end

    it "returns the newest message first" do
      expect(parsed_response.first["id"]).to eq Message.last.id
    end
  end
end
