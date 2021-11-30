json.set! @post.id do
  json.extract! @post, :id, :wall_id, :author_id, :parent_post_id, :body, :created_at, :updated_At
end