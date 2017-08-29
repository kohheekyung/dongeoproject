require 'open-uri'
class TradeController < ApplicationController
#before_filter :authenticate_user!, :except => [:index] 

    def create
        url = "http://info.finance.naver.com/marketindex/exchangeList.nhn"
        doc = Nokogiri::HTML(open(url), nil, 'euc-kr')
        currency = doc.css('td.sale')
        @new_currency = currency.map { |cur| cur.text }
        currency_name = doc.css('td.tit > a')
        @new_currency_name = currency_name.map { |cur_n| cur_n.text }
    end
    
    
    def write
        @post = Post.new
        @post.money = params[:money]
        @post.content = params[:content]
        @post.user_id = current_user.id
        #if @post.unis.nil?
        #    @post.unis = params[:uni]
        #else
        @post.unis = params[:uni]
        #end
        
        @post.save
        
        
       redirect_to "/trade/board" 
    end
    
    def index
        
    end
    
    def board
        if params[:money].nil?
            @posts = Post.all
        else
            @posts = Post.where(money: params[:money])
        end  
    end
    
    def reply_write
        reply = Reply.new
        reply.trade_money = params[:trade_money]
        reply.trade_mes = params[:trade_mes]
        reply.post_id = params[:post_id]
        reply.user_id = current_user.id
        reply.save
    
        redirect_to "/trade/board"
    end

  
    def destroy
         @post = Post.find(params[:id])
         @post.destroy
         
         redirect_to '/mypage/info'
    end
    


end