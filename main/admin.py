from django.contrib import admin

from main.models import Author, ViewUser, Journal, Article

admin.site.register([Author, ViewUser, Journal, Article])
