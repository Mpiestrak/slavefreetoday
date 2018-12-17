from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets

from .serializers import ArticleSerializer, AuthorSerializer, ViewUserSerializer, JournalSerializer
from .models import Article, Author, ViewUser


class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class AuthorView(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class ViewUserView(viewsets.ModelViewSet):
    queryset = ViewUser.objects.all()
    serializer_class = ViewUserSerializer


# class JournalView(viewsets.ModelViewSet):
#     queryset = Journal.objects.all()
#     serializer_class = JournalSerializer
