if @posts
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :wall_id, :author_id, :parent_post_id, :body, :created_at, :updated_at
    end
  end
end