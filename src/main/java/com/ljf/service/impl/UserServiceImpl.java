package com.ljf.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.ljf.bean.PaginationParam;
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
	
	public User getVipProp(String id) {
		return userDao.queryVipPropById(id);
	}
	
	public int queryMemberCount(PaginationParam paginationParam) {
		return userDao.queryUserCountByCondition(paginationParam);
	}
	
	public List<User> queryMember(PaginationParam paginationParam) {
		return userDao.queryUserByCondition(paginationParam);
	}
	
	public User querySomeonePartProfile(String nickname) {
		return userDao.queryOneByNickname(nickname);
	}
	
	public User querySomeoneProfile(String id) {
		return userDao.queryOneByIdForQuery(id);
	}
	
	public User queryIsShow(String id) {
		return userDao.queryIsShowById(id);
	}
	
	public void changeIsShowState(String id, boolean isShow) {
		userDao.updateIsShowById(id, isShow);
	}
	
	public boolean changePassword(String id, String originPassord, String newPassord) {
		if (userDao.findByIdAndPassword(id, originPassord) == null) {
			return false;
		} else {
			userDao.UpdatePassword(id, newPassord);
			return true;
		}
	}
}
