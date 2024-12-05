---
prev:
  text: 'SQL'
  link: '/it/sql/sql'
next:
  text: 'Home'
  link: '/it/it'
---
# Set up your database

Now that you've successfully logged into the ***MySQL Command Line Client***, you can proceed to set up your database and user for ***your_project***.

## 1. Create a Database

You need to create a database, use the following command, replacing ***your_project*** with your desired database name:
```sql
CREATE DATABASE your_project;
```

To confirm the database has been created, list all databases:
```sql
SHOW DATABASES;
```

## 2. Create a Database User

Create a new MySQL user , replace ***project_user*** and ***your_password*** with your desired username and password:
```sql
CREATE USER 'project_user'@'localhost' IDENTIFIED BY 'your_password';
```

## 3. Grant Permissions to the User

Grant the newly created user ***project_user*** all necessary permissions to access and modify ***your_project*** database:
```sql
GRANT ALL PRIVILEGES ON symfony_project.* TO 'project_user'@'localhost';
```

Apply the changes to ensure permissions take effect:
```sql
FLUSH PRIVILEGES;
```

## Check if the User Already Exists

Check if ***project_user*** already exists:
```sql
SELECT User, Host FROM mysql.user WHERE User = 'project_user';
```

## Drop the Existing User (If Found)

If the user ***project_user*** is listed, drop it:
```sql
DROP USER 'project_user'@'localhost';
```