package Scrumone_Else_Broke_It.WebShop.repository;

import Scrumone_Else_Broke_It.WebShop.entity.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
    List<Wishlist> findAllByUsername(int username);
}
