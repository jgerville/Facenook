json.extract! user, 
  :id, :email, :fname, :lname, :jobs, :schools, :current_city, 
  :hometown, :birthday, :gender, :relationship_status, :created_at

json.friends user.friends
json.people_sent_requests_to user.people_sent_requests_to
json.people_received_requests_from user.people_received_requests_from


if user.profpic.attached?
  # json.profpic rails_blob_url(user.profpic)
  json.profpic user.profpic.service_url
end

if user.cover_photo.attached?
  # json.cover_photo rails_blob_url(user.cover_photo)
  json.cover_photo user.cover_photo.service_url
end