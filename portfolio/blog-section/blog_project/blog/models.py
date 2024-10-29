from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.title

#class User(models.Model):
 #   user_name = models.CharField(max_length=200)
  #  email = models.CharField(max_length=200)
   # password = models.CharField(max_length=200)        

class Comment(models.Model):
    user = models.CharField(max_length=200)
    message = models.TextField()
    date_of_comment = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)

    def __str__(self):
        return self.user        

        