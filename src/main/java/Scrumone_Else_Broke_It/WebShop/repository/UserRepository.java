package Scrumone_Else_Broke_It.WebShop.repository;

import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {


    UserEntity findById(int id);

}
