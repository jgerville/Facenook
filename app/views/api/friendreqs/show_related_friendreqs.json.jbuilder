if @pending_sent || @pending_received
  json.pending do
    if @pending_sent
      @pending_sent.each do |friendreq|
        json.set! friendreq.id do
          json.extract! friendreq, :id, :sender_id, :target_id, :kind, :created_at, :updated_at
        end
      end
    end
    if @pending_received
      @pending_received.each do |friendreq|
        json.set! friendreq.id do
          json.extract! friendreq, :id, :sender_id, :target_id, :kind, :created_at, :updated_at
        end
      end
    end
  end
  json.accepted do
    @accepted.each do |friendreq|
      json.set! friendreq.id do
        json.extract! friendreq, :id, :sender_id, :target_id, :kind, :created_at, :updated_at
      end
    end
  end
end