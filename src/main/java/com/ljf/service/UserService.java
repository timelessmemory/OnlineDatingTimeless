package com.ljf.service;

import com.ljf.bean.User;

/**
 * <p>Title: UserService.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ20ÈÕ
 * @version 1.0
 */

public interface UserService {

	public void addUser(User user);
	public boolean isNicknameExist(String nickname);
	public boolean isMobileExist(String mobile);
	public String isUserExist(String mobile, String password);
	public User getUserProfile(String id);
	public void updateUserProfile(User user);
	public void updateUserAvatar(String id, String avatar);
}