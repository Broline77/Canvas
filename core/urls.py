#import the path function from djangos url module used to define url patterns
from django.urls import path
#imports the views model form the current dir
from . import views

#a listthat defines url patterns for your django project
#a list of 'path' objects that map URLS to view functions
#''empty string reps the base url/root url of your website/home
#views.index --> the view function that should handlle requests to this url
#name=index assigns a name to te url pattern for easy use
urlpatterns = [
    path('', views.index, name='index'),
    path('settings', views.settings, name='settings'),
    path('upload', views.upload, name='upload'),
    path('follow', views.follow, name='follow'),
    path('search', views.search, name='search'),
    path('profile/<str:pk>', views.profile, name='profile'),
    path('like-post', views.like_post, name='like-post'),
    path('signup', views.signup, name='signup'),
    path('signin', views.signin, name='signin'),
    path('logout', views.logout, name='logout'),
]