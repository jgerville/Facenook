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
class Friendreq < ApplicationRecord
  validate :ensure_unique_relationship, :on => :create

  belongs_to :sender,
    foreign_key: :sender_id,
    class_name: :User

  belongs_to :target,
    foreign_key: :target_id,
    class_name: :User

  def self.get_pending_friendreqs(userId)
    all_pending_friendreqs = Friendreq.all.where(kind: "pending")
    sent = all_pending_friendreqs.where(sender_id: userId)
    received = all_pending_friendreqs.where(target_id: userId)
    sent + received
  end

  def self.get_sent_pending_friendreqs(userId)
    all_pending_friendreqs = Friendreq.all.where(kind: "pending")
    sent = all_pending_friendreqs.where(sender_id: userId)
  end

  def self.get_received_pending_friendreqs(userId)
    all_pending_friendreqs = Friendreq.all.where(kind: "pending")
    received = all_pending_friendreqs.where(target_id: userId)
  end

  def self.get_accepted_friendreqs(userId)
    all_accepted_friendreqs = Friendreq.all.where(kind: "accepted")
    sent = all_accepted_friendreqs.where(sender_id: userId)
    received = all_accepted_friendreqs.where(target_id: userId)
    sent + received
  end

  def self.get_relationship(userId1, userId2)
    relationshipsArr = find_relationship(userId1, userId2) + find_opposite_relationship(userId1, userId2)
    relationshipsArr.size > 0 ? relationshipsArr : false
  end

  private

  def ensure_unique_relationship
    if !!Friendreq.get_relationships(self.sender_id, self.target_id)
      errors.add(:sender_id, "already has a relationship with this target")
    end
  end

  def self.find_relationship(senderId, targetId)
    Friendreq.where(sender_id: senderId).where(target_id: targetId)
  end

  def self.find_opposite_relationship(senderId, targetId)
    Friendreq.where(sender_id: targetId).where(target_id: senderId)
  end

end
