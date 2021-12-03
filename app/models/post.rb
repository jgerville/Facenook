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
class Post < ApplicationRecord

  validates :wall_id, :author_id, :body, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :wall_owner,
    foreign_key: :wall_id,
    class_name: :User

  has_many :child_posts,
    dependent: :destroy,
    foreign_key: :parent_post_id,
    class_name: :Post

  has_many :likes,
    dependent: :destroy

  belongs_to :parent_post,
    class_name: :Post,
    optional: true

  def self.find_by_friend_ids(arr)
    all_posts = Post.all
    on_friend_walls = arr.reduce([]) { |acc, id| acc + all_posts.where(wall_id: id).to_a}
    posted_by_friends = arr.reduce([]) { |acc, id| acc + all_posts.where(author_id: id).to_a}
    all = (on_friend_walls + posted_by_friends).uniq
  end

  def self.find_by_wall_owner(wall_id)
    only_on_this_wall = Post.all.where(wall_id: wall_id)
  end

end