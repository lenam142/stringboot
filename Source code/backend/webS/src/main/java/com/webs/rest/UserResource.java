package com.webs.rest;

import com.webs.dto.CustomUserDetails;
import com.webs.dto.UserDto;
import com.webs.entity.User;
import com.webs.jwt.JwtTokenProvider;
import com.webs.repository.UserRepository;
import com.webs.service.MailService;
import com.webs.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserResource {
    private final UserRepository userRepository;

    private final JwtTokenProvider jwtTokenProvider;

    private final UserService userService;

    private final MailService mailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserResource(UserRepository userRepository, JwtTokenProvider jwtTokenProvider, UserService userService, MailService mailService) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.mailService = mailService;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestBody User user) throws URISyntaxException {
        Optional<User> users = userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        System.out.println(users);
        if(users.isPresent() == false){
            return ResponseEntity.status(401)
                    .body(null);
        }
        CustomUserDetails customUserDetails = new CustomUserDetails(users.get());
        String token = jwtTokenProvider.generateToken(customUserDetails);
        return ResponseEntity
                .created(new URI("/api/authen/" ))
                .body(token);
    }

    @PostMapping("/register")
    public ResponseEntity<Integer> save(@RequestBody User user) throws URISyntaxException {
        if(userService.checkEmailexist(user.getEmail())){
            HttpHeaders headers = new HttpHeaders();
            headers.add("email already exist ", user.getEmail());
            return ResponseEntity.status(300).headers(headers)
                    .body(1);
        }
        User result = userService.save(user);
        System.out.println(result);
        mailService.sendEmail(user.getEmail(), "Kích hoạt tài khoản của bạn","http://localhost:8080/keyactive?key="+result.getActivation_key(),false, false);
        return ResponseEntity
                .created(new URI("/api/save/" + result.getId()))
                .body(0);
    }


    @PostMapping("/userlogged")
    public User getUserLogged(){
        return userService.getUserWithAuthority();
    }

    @GetMapping("/admin/getUserNotAdmin")
    public List<User> getUserNotAdmin() {
        return userRepository.findUserNotAdmin("ROLE_ADMIN");
    }

    @GetMapping("/admin/getUserNotAdminByDate")
    public List<User> getUserNotAdminByDate(@RequestParam("d1") Date d1, @RequestParam("d2") Date d2) {
        System.out.println("d1: "+d1);
        System.out.println("d2: "+d2);
        return userRepository.findUserNotAdminAndDate("ROLE_ADMIN", d1, d2);
    }


    @GetMapping("/admin/getUserNotadmin")
    public List<User> getUserNotUser() {
        return userRepository.findUserNotAdmin("ROLE_USER");
    }

    @PostMapping("/admin/activeUser")
    public void activeOrUnactiveUser(@RequestParam("id") Long id){
        User user = userRepository.findById(id).get();
        if(user.getActived() == 1){
            user.setActived(0);
        }
        else{
            user.setActived(1);
        }
        userRepository.save(user);
    }

    @PostMapping("/public/forgotpass")
    public void forgotPass(@RequestParam("email") String email) throws Exception {
        Optional<User> user = userRepository.findByEmail(email);
        if(!user.isPresent()){
            throw new Exception("khong tin thay user");
        }
        String randomPass = userService.randomPass();
        user.get().setPassword(passwordEncoder.encode(randomPass));
        userRepository.save(user.get());
        mailService.sendEmail(user.get().getEmail(),"mật khẩu mới của bạn"," mật khẩu mới của bạn là: "+randomPass, false, false);
    }

    @PostMapping("/user/changePassword")
    public void changePassword(@RequestParam("old") String oldPass, @RequestParam("new") String newPass) throws Exception {
        User user = userService.getUserWithAuthority();
        if(passwordEncoder.matches(oldPass, user.getPassword())){
            user.setPassword(passwordEncoder.encode(newPass));
        }
        else{
            throw new Exception("password khong dung");
        }
        userRepository.save(user);
    }


    @PostMapping("/user/updateinfor")
    public void updateInfor(@RequestBody UserDto userDto){
        User user = userService.getUserWithAuthority();
        user.setFullname(userDto.getFullname());
        user.setEmail(userDto.getEmail());
        user.setPhone(userDto.getPhone());
        userRepository.save(user);
    }
}
