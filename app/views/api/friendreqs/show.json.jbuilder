json.set! @friendreq.id do
  json.extract! @friendreq, :id, :sender_id, :target_id, :kind, :created_at, :updated_at
end