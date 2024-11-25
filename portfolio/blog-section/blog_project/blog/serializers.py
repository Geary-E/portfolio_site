from rest_framework import serializers
from .models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'message', 'date_of_comment', 'post']

#class CreateCommentSerializer(serializers.ModelSerializer): # Post request: TEST
 #   class Meta:
  #      model = Comment
   #     fields = ['user', 'message', 'date_of_comment', 'post']        


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at']