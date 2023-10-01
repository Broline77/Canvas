from django.contrib import admin
from .models import Profile, Post, LikePost, FollowersCount
#files you want to see in your admin panel

# Register your models here.
admin.site.register(Profile)
admin.site.register(Post)
admin.site.register(LikePost)
#followers not priority
admin.site.register(FollowersCount)
