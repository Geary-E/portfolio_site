from rest_framework import serializers
from .models import Post, Comment, User

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'message', 'date_of_comment', 'post', 'user']


class UserSerializer(serializers.ModelSerializer): # Added a new serializer for User model
    class Meta:
        model = User
        fields = ['id','email', 'user_name', 'password'] 


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at']