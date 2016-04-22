package com.ljf.dao;

import com.ljf.bean.User;

/**
 * <p>Title: UserDao.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ20ÈÕ
 * @version 1.0
 */

public interface UserDao {

	public void insertUser(User user);
	public boolean queryCountByNickname(String nickname);
	public boolean queryCountByMobile(String mobile);
	public String queryCountByMobileAndPassword(String mobile, String password);
	public void updateUser(User user);
	public User queryOneById(String id);
	public User queryOneByIdForQuery(String id);
	public void updateAvatarById(String id, String avatar);
}