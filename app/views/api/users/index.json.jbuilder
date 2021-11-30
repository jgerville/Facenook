if @users
  @users.each do |user|
    json.set! "#{user.id}" do
      json.extract! user, :id, :fname, :lname

      if user.profpic.attached?
        json.profpic user.profpic.service_url
      end
    end
  end
end