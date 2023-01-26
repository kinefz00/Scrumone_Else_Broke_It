package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.controller.UserController;
import Scrumone_Else_Broke_It.WebShop.entity.Wishlist;
import Scrumone_Else_Broke_It.WebShop.repository.WishlistRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.logging.Logger;

@Service
@Transactional
public class WishlistService {
    WishlistRepository wishlistRepository;
    public static Logger logger = Logger.getLogger(String.valueOf(UserController.class));

    public WishlistService(WishlistRepository wishlistRepository){
        this.wishlistRepository = wishlistRepository;
    }
    public void createWishlist(Wishlist wishlist){
        logger.info("hsad: " + wishlist);
        wishlistRepository.save(wishlist);
    }
    public List<Wishlist> readWishList(String username) {
        return wishlistRepository.findAllByUser(username);
    }
}
