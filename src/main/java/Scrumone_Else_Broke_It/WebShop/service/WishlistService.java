package Scrumone_Else_Broke_It.WebShop.service;


import Scrumone_Else_Broke_It.WebShop.entity.Wishlist;
import Scrumone_Else_Broke_It.WebShop.repository.WishlistRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class WishlistService {

    WishlistRepository wishlistRepository;

    public WishlistService (WishlistRepository wishlistRepository){
        this.wishlistRepository = wishlistRepository;
    }

    public void createWishlist(Wishlist wishlist){
        wishlistRepository.save(wishlist);
    }
    public List<Wishlist> getWishlist(int username){
        return wishlistRepository.findAllByUsername(username);
    }
}
