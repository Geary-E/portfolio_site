from django.db import models

# Create your models here. 


#def get_default_user():     #testing...testing
 #   user = User.objects.first() # first user in database

  #  if user is None:
   #     created_user = User.objects.create_user(email='test@test.com', user_name='default_test', password='test1234')

   # return user.id


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
    user = models.ForeignKey(User, on_delete=models.CASCADE,default=1) # trial run: Testing...testing

    def __str__(self):
        return self.message


        