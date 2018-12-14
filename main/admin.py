from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportMixin, ImportMixin, ExportActionModelAdmin, ImportExportModelAdmin
from .models import Author, ViewUser, Article


class AuthorResource(resources.ModelResource):
    class Meta:
        model = Author


class AuthorAdmin(ImportExportModelAdmin):
    resource_class = AuthorResource
    pass


class ViewUserResource(resources.ModelResource):
    class Meta:
        model = ViewUser


class ViewUserAdmin(ImportExportModelAdmin):
    resource_class = ViewUserResource
    pass


# class JournalResource(resources.ModelResource):
#     class Meta:
#         model = Journal
#
#
# class JournalAdmin(ImportExportModelAdmin):
#     resource_class = JournalResource
#     pass


class ArticleResource(resources.ModelResource):
    class Meta:
        model = Article


class ArticleAdmin(ImportExportModelAdmin):
    resource_class = ArticleResource
    pass


admin.site.register(Author, AuthorAdmin)
admin.site.register(ViewUser, ViewUserAdmin)
# admin.site.register(Journal, JournalAdmin)
admin.site.register(Article, ArticleAdmin)