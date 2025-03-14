from django.shortcuts import render
from rest_framework import viewsets, generics, status
from rest_framework.views import APIView
#from rest_framework.generics import CreateAPIView
from .models import Post, Comment, User
import json
from django.http import JsonResponse, HttpResponse
from .serializers import PostSerializer, CommentSerializer, UserSerializer
from rest_framework.decorators import action
from rest_framework.response import Response 
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework.parsers import JSONParser

# Create your views here.
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
        queryset = Post.objects.all()
        serializer_class = PostSerializer

def post_list(request):
    posts = Post.objects.all().values('id', 'title', 'content', 'created_at')
    return JsonResponse(list(posts), safe=False)

def home(request):
    return HttpResponse("Welcome to the Blog Page!")        

def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)}) 


class CommentList(APIView):

    # function for GET request
    def get(self, request, pk, format=None):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    
class CommentCreate(APIView):  
    # function for POST request
    def post(self, request, pk, format=None):
        post = Post.objects.get(pk=pk)  # Get the post for which the comment is being made
        data = request.data.copy()
        data['post'] = post.id  # Attach the post ID to the comment data
        #serializer = CommentSerializer(data=request.data)
        serializer = CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserList(APIView):
    # function for GET request
    def get(self, request, format=None): # pk removed - testing...testing: 1/5/2025
        users = User.objects.all()
        serializer =   UserSerializer(users, many=True)
        return Response(serializer.data)
    # function for POST request
    def post(self, request, format=None): #pk removed - testing...testing: 1/5/2025
        serializer = UserSerializer(data=request.data)    
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#testing...user login authentication in Django(1/12/2025)
def login_user(request):
     if request.method == "POST":
        import json
        data = json.loads(request.body)

        user_name = data.get('user_name')
        password = data.get('password')

        try:
            user = User.objects.get(user_name=user_name)
            if user.password == password:
                return JsonResponse({"message": "Login successful!", "user_id": user.id}, status=200)
            else:
                return JsonResponse({"message": "Invalid credentials"}, status=401)
        except User.DoesNotExist:
            return JsonResponse({"message": "User not found"}, status=404)

     return JsonResponse({"message": "Invalid request"}, status=400)   

def test_csrf(request):
    return JsonResponse({"message": "CSRF cookie set"})                        

 