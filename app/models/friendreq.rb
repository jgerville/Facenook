# == Schema Information
#
# Table name: friendreqs
#
#  id         :bigint           not null, primary key
#  sender_id  :integer          not null
#  target_id  :integer          not null
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendreq < ApplicationRecord

  belongs_to :sender,
    foreign_key: :sender_id,
    class_name: :User

  belongs_to :target,
    foreign_key: :target_id,
    class_name: :User
end
