if @post
  json.set! @post.id do
    json.extract! @post, :id, :wall_id, :author_id, :parent_post_id, :body, :created_at, :updated_at
    json.child_posts do
      if @post.child_posts
        json.array! @post.child_post_ids
      end
    end
    json.likes do
      if @post.likes
        json.array! @post.like_ids
      end
    end
  end
end