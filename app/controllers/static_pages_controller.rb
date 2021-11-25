class StaticPagesController < ApplicationController

  def root
    render :root
  end
  
  def other
    p "looks like we attempted to access something other than root! redirecting"
    redirect_to :root
  end
end
