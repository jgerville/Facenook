class StaticPagesController < ApplicationController

  def root
    render :root
  end
  
  def other
    redirect_to :root
  end
end
