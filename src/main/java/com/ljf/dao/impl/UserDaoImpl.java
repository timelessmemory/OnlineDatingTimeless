package com.ljf.dao.impl;

import javax.annotation.Resource;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.ljf.bean.User;
import com.ljf.dao.UserDao;

/**
 * <p>Title: UserDaoImpl.java<£¯p>
 * <p>Description: <£¯p>
 * <p>Company: <£¯p>
 * @author timeless
 * @date 2016Äê4ÔÂ20ÈÕ
 * @version 1.0
 */

@Repository("userDao")
public class UserDaoImpl implements UserDao {
	
	@Resource
	private MongoTemplate mongoTemplate;
	
	public MongoTemplate getMongoTemplate() {
		return mongoTemplate;
	}

	public void setMongoTemplate(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}

	public void insertUser(User user) {
		mongoTemplate.insert(user);
	}
	
	public String queryCountByMobileAndPassword(String mobile, String password) {
		Query query = new Query();
		query.addCriteria(Criteria.where("mobile").is(mobile).and("password").is(password));
		User user = mongoTemplate.findOne(query, User.class);
		if (user == null) {
			return "";
		} else {
			return user.getId();
		}
	}
	
	public boolean queryCountByNickname(String nickname) {
		Query query = new Query();
		query.addCriteria(Criteria.where("nickname").is(nickname));
		long count = mongoTemplate.count(query, User.class);
		if (count == 0) {
			return false;
		} else {
			return true;
		}
	}
	
	public boolean queryCountByMobile(String mobile) {
		Query query = new Query();
		query.addCriteria(Criteria.where("mobile").is(mobile));
		long count = mongoTemplate.count(query, User.class);
		if (count == 0) {
			return false;
		} else {
			return true;
		}
	}
	
	public void updateUser(User user) {
        mongoTemplate.save(user);
	}
	
	public User queryOneById(String id) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.findOne(query, User.class);
	}
	
	public void updateAvatarById(String id, String avatar) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		Update update = new Update();
		update.set("avatar", avatar);
		mongoTemplate.updateFirst(query, update, User.class);
	}
	
	public User queryOneByIdForQuery(String id) {
		Query query = new Query();
		query.fields().exclude("password").exclude("isVIP")
		.exclude("mobile").exclude("email").exclude("registerDate")
		.exclude("LastLoginTime");
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.findOne(query, User.class);
	}
}
