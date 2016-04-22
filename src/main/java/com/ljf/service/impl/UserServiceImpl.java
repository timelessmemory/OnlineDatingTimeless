package com.ljf.service.impl;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ljf.bean.User;
import com.ljf.dao.UserDao;
import com.ljf.service.UserService;

/**
 * <p>Title: UserService.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ20ÈÕ
 * @version 1.0
 */

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Resource
	private UserDao userDao;
	
	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	public void addUser(User user) {
		userDao.insertUser(user);
	}
	
	public boolean isNicknameExist(String nickname) {
		return userDao.queryCountByNickname(nickname);
	}
	
	public boolean isMobileExist(String mobile) {
		return userDao.queryCountByMobile(mobile);
	}
	
	public String isUserExist(String mobile, String password) {
		return userDao.queryCountByMobileAndPassword(mobile, password);
	}
	
	public User getUserProfile(String id) {
		return userDao.queryOneById(id);
	}
	
	public void updateUserProfile(User user) {
		userDao.updateUser(user);
	}
	
	public void updateUserAvatar(String id, String avatar) {
		userDao.updateAvatarById(id, avatar);
	}
}
