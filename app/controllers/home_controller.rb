class HomeController < ApplicationController
	def top
    	@all_ranks = Postarticle.find(Bookmark.group(:postarticle_id).order('count(postarticle_id) desc').limit(:page).pluck(:postarticle_id))
	end

	def about
	end
end
