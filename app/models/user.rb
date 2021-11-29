# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  fname               :string           not null
#  lname               :string           not null
#  birthday            :datetime         not null
#  gender              :string
#  jobs                :text
#  schools             :text
#  current_city        :string
#  hometown            :string
#  relationship_status :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password
  after_initialize :ensure_session_token

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  has_one_attached :profpic
  has_one_attached :cover_photo

  has_many :friendreqs_sent, 
    dependent: :destroy,
    foreign_key: :sender_id,
    class_name: :Friendreq

  has_many :friendreqs_received,
    dependent: :destroy,
    foreign_key: :target_id,
    class_name: :Friendreq

  has_many :people_sent_requests_to,
    through: :friendreqs_sent,
    source: :target

  has_many :people_received_requests_from,
    through: :friendreqs_received,
    source: :sender

  def friendships
    sent = self.friendreqs_sent.where(kind: "accepted")
    received = self.friendreqs_received.where(kind: "accepted")
    sent + received
  end

  def mutual_friends(user2)
    self.friends & user2.friends
  end

  def friends
    sent = self.friendreqs_sent.where(kind: "accepted").pluck(:target_id)
    received = self.friendreqs_received.where(kind: "accepted").pluck(:sender_id)
    sent + received
  end

  def people_sent_requests_to
    self.pending_sent_reqs.pluck(:target_id)
  end

  def people_received_requests_from
    self.pending_received_reqs.pluck(:sender_id)
  end

  def pending_sent_reqs
    self.friendreqs_sent.where(kind: "pending")
  end

  def pending_received_reqs
    self.friendreqs_received.where(kind: "pending")
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_valid_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
