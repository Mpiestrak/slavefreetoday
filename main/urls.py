from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('articles', views.ArticleView)
router.register('authors', views.AuthorView)
router.register('viewusers', views.ViewUserView)


urlpatterns = [
    path('', include(router.urls))
]