set names utf8;
CREATE TABLE response (
        uid INT NOT NULL AUTO_INCREMENT,
        uname VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        email VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        occupation VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        interest VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q1 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q2 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q3 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q4 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q5 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q6 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q7 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q8 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q9 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        q10 VARCHAR(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        url VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        content TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        tag TEXT CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        headline VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci,
        PRIMARY KEY (uid)        	
) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
