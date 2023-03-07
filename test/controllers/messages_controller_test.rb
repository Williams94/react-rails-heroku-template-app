require 'rails_helper'
require 'spec_helper'

RSpec.describe "API V1 Messages", type: :request do
  describe "POST /messages" do
    context "valid params" do
      let(:valid_params) {{
        message: {
          message_body: "Fake Message"
        }
      }}

      it "creates a new message with the correct attributes" do
        post "/messages", params: valid_params
        expect(Message.last).to have_attributes valid_params[:message]
      end
    end

    context "invalid params" do
      let(:invalid_params) {{ body: "Fake Message" }}

      it "does not create a new message" do
        expect {
          post "/messages", params: invalid_params
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
      get "/messages"
    end

    it "returns all messages" do
      expect(parsed_response.count).to eq 3
    end

    it "returns all messages in the correct order" do
      expect(parsed_response.first["id"]).to eq 1
      expect(parsed_response.second["id"]).to eq 2
      expect(parsed_response.last["id"]).to eq 3
    end
  end
end
