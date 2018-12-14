from django.db import models
from django.db.models import DO_NOTHING


class ViewUser(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.last_name


class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(blank=True)
    password = models.CharField(max_length=100, blank=True)
    organization = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.last_name


# class Journal(models.Model):
#     title = models.CharField(max_length=100)
#     volumenumber = models.CharField(max_length=100)
#     issuenumber = models.CharField(max_length=100)
#     issuedate = models.DateField()
#     description = models.TextField(null=True, blank=True)
#
#     def __str__(self):
#         return self.title


class Article(models.Model):
    title = models.CharField(max_length=100)
    categories = models.CharField(max_length=100)
    tags = models.CharField(max_length=100)
    issuedate = models.DateField()
    groups = models.CharField(max_length=100)
    hits = models.IntegerField(default=0)
    author = models.ForeignKey(Author, on_delete=DO_NOTHING, related_name='authors')

    def __str__(self):
        return self.title
