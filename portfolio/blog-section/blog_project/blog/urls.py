from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from blog.views import post_list, PostDetail,CommentList, get_csrf_token
from . import views

router = DefaultRouter()
#router.register(r'posts', PostDetail)

urlpatterns = [
    path('', include(router.urls)), # recent addition
    path('posts/', post_list, name='post-list'), # recent changes
    path('posts/<int:pk>/', PostDetail.as_view(), name='post-detail'),
    path('posts/<int:pk>/comments/', CommentList.as_view(), name='comment-list'),
     path('posts/<int:pk>/comments/create/', views.CommentCreate.as_view(), name='comment-create'), # new line addition
    path('api/get-csrf-token/', get_csrf_token, name='get_csrf_token'),
]