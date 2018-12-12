from django.contrib import admin

from main.models import Author, ViewUser, Journals, Articles

admin.site.register([Author, ViewUser, Journals, Articles])
