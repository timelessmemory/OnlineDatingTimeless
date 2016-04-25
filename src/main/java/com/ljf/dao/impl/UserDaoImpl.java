package com.ljf.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import com.ljf.bean.PaginationParam;
import com.ljf.bean.Response;
import com.ljf.bean.User;
import com.ljf.dao.UserDao;
import com.ljf.utils.StringUtils;

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
	
	public User queryVipPropById(String id) {
		Query query = new Query();
		query.fields().include("isVIP");
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.findOne(query, User.class);
	}
	
	public int queryUserCountByCondition(PaginationParam paginationParam) {
		Query query = new Query();
		
		query.addCriteria(Criteria.where("isShow").is(true));
		
		if (paginationParam.getBirthFrom() != 0 && paginationParam.getBirthTo() != 0) {
			query.addCriteria(Criteria.where("age").gte(paginationParam.getBirthFrom()).lt(paginationParam.getBirthTo()));
		}
		
		if (paginationParam.getBirthFrom() == 0 && paginationParam.getBirthTo() != 0) {
			query.addCriteria(Criteria.where("age").lte(paginationParam.getBirthTo()));
		}
		
		if (paginationParam.getBirthFrom() != 0 && paginationParam.getBirthTo() == 0) {
			query.addCriteria(Criteria.where("age").gte(paginationParam.getBirthFrom()));
		}
		
		if (paginationParam.getFromStature() != 0 && paginationParam.getToStature() != 0) {
			query.addCriteria(Criteria.where("stature").gte(paginationParam.getFromStature()).lte(paginationParam.getToStature()));
		}
		
		if (paginationParam.getFromStature() != 0 && paginationParam.getToStature() == 0) {
			query.addCriteria(Criteria.where("stature").gte(paginationParam.getFromStature()));
		}
		
		if (paginationParam.getFromStature() == 0 && paginationParam.getToStature() != 0) {
			query.addCriteria(Criteria.where("stature").lte(paginationParam.getToStature()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getCountry())) {
			query.addCriteria(Criteria.where("country").is(paginationParam.getCountry()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getProvince())) {
			query.addCriteria(Criteria.where("province").is(paginationParam.getProvince()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getCity())) {
			query.addCriteria(Criteria.where("city").is(paginationParam.getCity()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getEducation())) {
			query.addCriteria(Criteria.where("education").is(paginationParam.getEducation()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getSalaryRange())) {
			query.addCriteria(Criteria.where("salary").is(paginationParam.getSalaryRange()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getId())) {
			query.addCriteria(Criteria.where("id").ne(paginationParam.getId()));
		}
		
		query.addCriteria(Criteria.where("gender").is(paginationParam.getGender()));
		
		return (int) mongoTemplate.count(query, User.class);
	}
	
	public List<User> queryUserByCondition(PaginationParam paginationParam) {
		Query query = new Query();
		
		query.addCriteria(Criteria.where("isShow").is(true));
		
		if (paginationParam.getBirthFrom() != 0 && paginationParam.getBirthTo() != 0) {
			query.addCriteria(Criteria.where("age").gte(paginationParam.getBirthFrom()).lt(paginationParam.getBirthTo()));
		}
		
		if (paginationParam.getBirthFrom() == 0 && paginationParam.getBirthTo() != 0) {
			query.addCriteria(Criteria.where("age").lte(paginationParam.getBirthTo()));
		}
		
		if (paginationParam.getBirthFrom() != 0 && paginationParam.getBirthTo() == 0) {
			query.addCriteria(Criteria.where("age").gte(paginationParam.getBirthFrom()));
		}
		
		if (paginationParam.getFromStature() != 0 && paginationParam.getToStature() != 0) {
			query.addCriteria(Criteria.where("stature").gte(paginationParam.getFromStature()).lte(paginationParam.getToStature()));
		}
		
		if (paginationParam.getFromStature() != 0 && paginationParam.getToStature() == 0) {
			query.addCriteria(Criteria.where("stature").gte(paginationParam.getFromStature()));
		}
		
		if (paginationParam.getFromStature() == 0 && paginationParam.getToStature() != 0) {
			query.addCriteria(Criteria.where("stature").lte(paginationParam.getToStature()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getCountry())) {
			query.addCriteria(Criteria.where("country").is(paginationParam.getCountry()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getProvince())) {
			query.addCriteria(Criteria.where("province").is(paginationParam.getProvince()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getCity())) {
			query.addCriteria(Criteria.where("city").is(paginationParam.getCity()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getEducation())) {
			query.addCriteria(Criteria.where("education").is(paginationParam.getEducation()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getSalaryRange())) {
			query.addCriteria(Criteria.where("salary").is(paginationParam.getSalaryRange()));
		}
		
		if (!StringUtils.isEmpty(paginationParam.getId())) {
			query.addCriteria(Criteria.where("id").ne(paginationParam.getId()));
		}
		
		query.addCriteria(Criteria.where("gender").is(paginationParam.getGender()));
		
		query.fields().include("avatar").include("nickname").include("age").include("province")
		.include("city").include("education").include("salary");
		
		query.skip((paginationParam.getCurrentPage() - 1) * paginationParam.getPageSize())
		.limit(paginationParam.getPageSize());
		
		return mongoTemplate.find(query, User.class);
	}
	
	public User queryOneByNickname(String nickname) {
		Query query = new Query();
		query.fields().include("avatar").include("nickname").include("age").include("province")
		.include("city").include("education").include("salary");
		query.addCriteria(Criteria.where("nickname").is(nickname));
		return mongoTemplate.findOne(query, User.class);
	}
	
	public User queryOneByIdForQuery(String id) {
		Query query = new Query();
		query.fields().exclude("password").exclude("isVIP")
		.exclude("mobile").exclude("email").exclude("registerDate")
		.exclude("lastLoginTime").exclude("realName");
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.findOne(query, User.class);
	}
	
	public User queryIsShowById(String id) {
		Query query = new Query();
		query.fields().include("isShow");
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.findOne(query, User.class);
	}
	
	public void updateIsShowById(String id, boolean isShow) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		Update update = new Update();
		update.set("isShow", isShow);
		mongoTemplate.updateFirst(query, update, User.class);
	}
	
	public User findByIdAndPassword(String id, String originPassword) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id).and("password").is(originPassword));
		return mongoTemplate.findOne(query, User.class);
	}
	
	public void UpdatePassword(String id, String newPassword) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		Update update = new Update();
		update.set("password", newPassword);
		mongoTemplate.updateFirst(query, update, User.class);
	}
}
