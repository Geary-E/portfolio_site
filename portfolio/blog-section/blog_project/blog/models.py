from django.db import models

# Create your models here. # This is a test---- This is just a test001: This is just a test
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title

class User(models.Model):
    email = models.CharField(max_length=200)
    user_name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.user_name          

      
class Comment(models.Model):
    #user = models.CharField(max_length=200) : Trial run
    message = models.TextField()
    date_of_comment = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE) # trial run

    def __str__(self):
        return self.message


        