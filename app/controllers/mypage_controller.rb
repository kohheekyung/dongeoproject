class MypageController < ApplicationController
before_filter :authenticate_user!
    def info
        @posts = current_user.posts.reverse #현재 사용자의 게시글을 모두 가져온다.
    end
#개인게시글 생성    
    # def create
    # Post.create(user_id: current_user.id, content: params[:content], outer: params[:outer], top: params[:top], bottom: params[:bottom], dress: params[:dress], etc: params[:etc])

    
    # redirect_to '/posts/myindex'
    # end
  
    
end
