require 'open-uri'

class CrawlerController < ApplicationController
  def index
    url = "http://info.finance.naver.com/marketindex/exchangeList.nhn"
    doc = Nokogiri::HTML(open(url), nil, 'euc-kr')
    # currency = doc.css('div.head_info > span.value') #span 태그의 value태그 가져오기
    # @new_currency = currency.map { |cur| cur.text }
    # currency_name = doc.css('h3.h_lst')
    # @new_currency_name = currency_name.map { |cur_n| cur_n.text }
    
    currency = doc.css('td.sale')
    @new_currency = currency.map { |cur| cur.text }
    currency_name = doc.css('td.tit > a')
    @new_currency_name = currency_name.map { |cur_n| cur_n.text }
    
  end
end
