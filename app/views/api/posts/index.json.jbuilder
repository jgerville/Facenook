if @posts
  json.posts do
    @posts.each do |post|
      json.set! post.id do
        json.extract! post, :id, :wall_id, :author_id, :parent_post_id, :body, :created_at, :updated_at
        json.child_posts do
          if post.child_posts
            json.array! post.child_post_ids
          end
        end
        json.likes do
          if post.likes
            json.array! post.like_ids
          end
        end
      end
    end
  end
end

if @posts
  json.users do
    @posts.each do |post|
      json.set! "#{post.author.id}" do
        json.extract! post.author, 
          :id, :email, :fname, :lname, :jobs, :schools, :current_city, 
          :hometown, :birthday, :gender, :relationship_status, :created_at
        json.friends post.author.friends

        if post.author.profpic.attached?
          json.profpic post.author.profpic.service_url
        end

        if post.author.cover_photo.attached?
          json.cover_photo post.author.cover_photo.service_url
        end
      end

      json.set! "#{post.wall_owner.id}" do
        json.extract! post.wall_owner, 
          :id, :email, :fname, :lname, :jobs, :schools, :current_city, 
          :hometown, :birthday, :gender, :relationship_status, :created_at
        json.friends post.wall_owner.friends

        if post.wall_owner.profpic.attached?
          json.profpic post.wall_owner.profpic.service_url
        end

        if post.wall_owner.cover_photo.attached?
          json.cover_photo post.wall_owner.cover_photo.service_url
        end
      end
    end
  end
end

if @posts
  json.likes do
    @posts.each do |post|
      if post.likes
        post.likes.each do |like|
          json.set! like.id do
            json.extract! like, :id, :user_id, :post_id, :kind, :created_at, :updated_at
          end
        end
      end
    end
  end
end