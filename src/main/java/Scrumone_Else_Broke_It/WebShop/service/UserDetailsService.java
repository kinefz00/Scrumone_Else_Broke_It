package Scrumone_Else_Broke_It.WebShop.service;

import Scrumone_Else_Broke_It.WebShop.controller.UserController;
import Scrumone_Else_Broke_It.WebShop.entity.UserEntity;
import Scrumone_Else_Broke_It.WebShop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    public static Logger logger = Logger.getLogger(String.valueOf(UserController.class));

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByUsername(username);
        if (userEntity != null) {
            return new User(userEntity.getUsername(), userEntity.getPassword(), buildSimpleGrantedAuthorities(userEntity.getRole()));
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);

        }

    }

    private static List<SimpleGrantedAuthority> buildSimpleGrantedAuthorities(final String roles) {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(roles));
        return authorities;
    }

    public void saveOrUpdate(UserEntity userEntity) {
        logger.info("Save User");
        userRepository.save(userEntity);
    }


    public List<UserEntity> getAllUser() {
        List<UserEntity> list = new ArrayList<UserEntity>();
        userRepository.findAll().forEach(userEntity -> list.add(userEntity));
        return list;
    }

    public UserEntity getUserByUsername(String username) {
        logger.info("Get User with \"username\". " + username);
        return userRepository.findByUsername(username);
    }

    public void deleteUser(String username) {
        logger.info("Delete User with \"username\": " + username);
        userRepository.deleteById(username);
    }

    public void edit(String username, UserEntity userEntity) {
        logger.info("Edit User with \"username\" " + username);
        userEntity.setUsername(username);
        userRepository.save(userEntity);
    }

}
