class Api::V1::TagsController < ApplicationController
  def index
    @tags = Tag.all
    render 'index.json.jbuilder'    
  end

  def show
    @tag = Tag.find_by(id: params[:id])
    render 'show.json.jbuilder'    
  end
end
