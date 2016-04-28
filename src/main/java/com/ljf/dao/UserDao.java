package com.ljf.dao;

import java.util.List;

import com.ljf.bean.PaginationParam;
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
	public User queryVipPropById(String id);
	public int queryUserCountByCondition(PaginationParam paginationParam);
	public List<User> queryUserByCondition(PaginationParam paginationParam);
	public User queryOneByNickname(String nickname);
	public User queryIsShowById(String id);
	public void updateIsShowById(String id, boolean isShow);
	public User findByIdAndPassword(String id, String originPassword);
	public void UpdatePassword(String id, String newPassword);
	public void updatelastLoginTime(String mobile);
}