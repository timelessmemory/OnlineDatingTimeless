package com.ljf.controller;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ljf.bean.Response;
import com.ljf.bean.User;
import com.ljf.commons.Constants;
import com.ljf.exception.LoginException;
import com.ljf.service.UserService;
import com.ljf.utils.AccessTokenUtils;

/**
 * <p>Title: UserController.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ20ÈÕ
 * @version 1.0
 */

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Resource
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	@ResponseBody
	@RequestMapping(value = "/checkNickname", method = RequestMethod.GET)
	public Response checkNickname(@RequestParam String nickname) {
		boolean isExist = userService.isNicknameExist(nickname);
		if (isExist) {
			return new Response(Constants.NICKNAME_EXIST_CODE, Constants.NICKNAME_EXIST);
		} else {
			return new Response(Constants.NICKNAME_PASS_CODE, Constants.NICKNAME_PASS);
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "/checkMobile", method = RequestMethod.GET)
	public Response checkMobile(@RequestParam String mobile) {
		boolean isExist = userService.isMobileExist(mobile);
		if (isExist) {
			return new Response(Constants.MOBILE_EXIST_CODE, Constants.MOBILE_EXIST);
		} else {
			return new Response(Constants.MOBILE_PASS_CODE, Constants.MOBILE_PASS);
		}
	}

	@ResponseBody
	@RequestMapping(value = "/register", method = RequestMethod.POST)
    public Response register(@RequestBody User user) {
		userService.addUser(user);
		return new Response(Constants.SUCCESS_CODE, Constants.SUCCESS);
    }
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
    public Response login(@RequestParam String mobile, @RequestParam String password) {
		String id = userService.isUserExist(mobile, password);
		if (!id.equals("")) {
			return new Response(Constants.SUCCESS_CODE, AccessTokenUtils.generateAccessToken(), id);
		} else {
			throw new LoginException();
		}
    }
	
	@ResponseBody
	@RequestMapping(value = "/getProfile", method = RequestMethod.GET)
    public User getProfile(@RequestParam String id) {
		return userService.getUserProfile(id);
    }
	
	@ResponseBody
	@RequestMapping(value = "/updateProfile", method = RequestMethod.PUT)
	public Response updateProfile(@RequestBody User user) {
		userService.updateUserProfile(user);
		return new Response(Constants.SUCCESS_CODE, Constants.SUCCESS);
    }
	
	@ResponseBody
	@RequestMapping(value = "/updateAvatar", method = RequestMethod.POST)
	public Response updateAvatar(@RequestParam String avatar, @RequestParam String id) {
		userService.updateUserAvatar(id, avatar);
		return new Response(Constants.SUCCESS_CODE, Constants.SUCCESS);
    }
	
}
