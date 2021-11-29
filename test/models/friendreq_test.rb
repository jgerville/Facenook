# == Schema Information
#
# Table name: friendreqs
#
#  id         :bigint           not null, primary key
#  sender_id  :integer          not null
#  target_id  :integer          not null
#  kind       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class FriendreqTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
