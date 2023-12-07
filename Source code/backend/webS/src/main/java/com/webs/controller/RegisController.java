package com.webs.controller;

import com.webs.entity.User;
import com.webs.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
public class RegisController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @RequestMapping(value = {"/keyactive"}, method = RequestMethod.GET)
    public String home(@RequestParam("key") String key){
        Optional<User> user = userRepository.getUserByActivationKey(key);
        if(user.isPresent()){
            user.get().setActived(1);
            userRepository.save(user.get());
            return "keyactive";
        }

        return "messageerror";
    }
}
