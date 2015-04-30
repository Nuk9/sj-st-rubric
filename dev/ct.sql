CREATE TABLE response (
        uid INT NOT NULL AUTO_INCREMENT,
        uname VARCHAR(255),
        email VARCHAR(255),
        status VARCHAR(255),
        status_other VARCHAR(255),
        interest VARCHAR(255),
        q1 VARCHAR(10),
        q2 VARCHAR(10),
        q3 VARCHAR(10),
        q4 VARCHAR(10),
        q5 VARCHAR(10),
        url VARCHAR(255),
        content TEXT,
        tag TEXT,
        headline VARCHAR(255),
        PRIMARY KEY (uid)        	
);
