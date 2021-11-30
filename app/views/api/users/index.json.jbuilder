if @users
  json.search_results do
    @users.each do |user|
      json.set! user.id do
        json.extract! user, user.id, user.fname, user.lname, user.profpic
      end
    end
  end
end