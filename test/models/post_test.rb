# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  wall_id        :integer          not null
#  author_id      :integer          not null
#  parent_post_id :integer
#  body           :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
