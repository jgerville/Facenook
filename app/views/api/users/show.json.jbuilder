if @new
  json.partial! "api/users/new_user", user: @user
else
  json.partial! "api/users/user", user: @user
end

