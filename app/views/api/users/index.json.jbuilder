if @users
  @users.each do |user|
    json.set! "#{user.id}" do
      json.extract! user, :id, :fname, :lname, :profpic
    end
  end
end