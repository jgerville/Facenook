if @like
  json.set! @like.id do
    json.extract! @like, :id, :user_id, :post_id, :kind, :created_at, :updated_at
  end
end