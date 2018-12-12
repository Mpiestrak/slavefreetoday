from django.db import models
from django.db.models import DO_NOTHING


class ViewUser(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.last_name

class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    organization = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.last_name

class Journal(models.Model):
    title = models.CharField(max_length=100)
    volumenumber = models.CharField(max_length=100)
    issuenumber = models.CharField(max_length=100)
    issuedate = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.title

class Article(models.Model):
    title = models.CharField(max_length=100)
    categories = models.CharField(max_length=100)
    tags = models.CharField(max_length=100)
    issuedate = models.DateField()
    groups = models.CharField(max_length=100)
    hits = models.IntegerField()
    author = models.ForeignKey(Author, on_delete=DO_NOTHING, related_name='authors')


    def __str__(self):
        return self.title