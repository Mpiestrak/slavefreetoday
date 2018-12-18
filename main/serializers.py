from rest_framework import serializers

from .models import ViewUser, Author, Article#,Journal


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'categories', 'tags', 'issuedate', 'groups', 'hits', 'author', 'abstract', 'content')


class AuthorSerializer(serializers.ModelSerializer):
    article = ArticleSerializer(many=True, read_only=True)

    class Meta:
        model = Author
        fields = ('first_name', 'last_name', 'email', 'password', 'organization', 'description', 'article')


class ViewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ViewUser
        fields = ('first_name', 'last_name', 'email', 'password')

