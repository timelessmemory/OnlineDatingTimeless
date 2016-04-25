package com.ljf.service;

import java.util.List;

import org.springframework.web.bind.annotation.RequestParam;

import com.ljf.bean.PaginationParam;
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
	public User getVipProp(String id);
	public int queryMemberCount(PaginationParam paginationParam);
	public List<User> queryMember(PaginationParam paginationParam);
	public User querySomeonePartProfile(String nickname);
	public User querySomeoneProfile(String id);
	public User queryIsShow(String id);
	public void changeIsShowState(String id, boolean isShow);
	public boolean changePassword(String id, String originPassord, String newPassord);
}