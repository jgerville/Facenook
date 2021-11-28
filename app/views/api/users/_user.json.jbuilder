json.extract! user, 
  :id, :email, :fname, :lname, :jobs, :schools, :current_city, 
  :hometown, :birthday, :gender, :relationship_status, :created_at

if user.profpic.attached?
  json.profpic user.profpic.service_url
end

if user.cover_photo.attached?
  json.cover_photo user.cover_photo.service_url
end