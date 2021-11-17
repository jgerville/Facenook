# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  fname               :string           not null
#  lname               :string           not null
#  birthday            :datetime         not null
#  gender              :string
#  jobs                :text
#  schools             :text
#  current_city        :string
#  hometown            :string
#  relationship_status :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class User < ApplicationRecord
end
