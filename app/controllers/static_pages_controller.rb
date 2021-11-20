class StaticPagesController < ApplicationController

  def root
    render :root
  end
  
  def other
    p "got here"
    redirect_to :root
  end
end
