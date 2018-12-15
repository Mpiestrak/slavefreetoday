from rest_framework import serializers

from .models import ViewUser, Author, Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'categories', 'tags', 'issuedate', 'groups', 'hits', 'abstract', 'content', 'author')


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'first_name', 'last_name', 'email', 'password', 'organization', 'description')


class ViewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ViewUser
        fields = ('id', 'first_name', 'last_name', 'email', 'password')


# class JournalSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Journal
#         fields = ('title', 'volumenumber', 'issuenumber', 'issuedate', 'description')
