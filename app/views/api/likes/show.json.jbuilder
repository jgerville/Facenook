if @like
  json.set! @like.id do
    json.extract! @like, :id, :user_id, :post_id, :type, :created_at, :updated_at
  end
end