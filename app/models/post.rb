class Post < ActiveRecord::Base
    resourcify
    
    has_many :replies
    belongs_to :user
    
end
