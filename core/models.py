from django.db import models
from django.contrib.auth import get_user_model
import uuid
from datetime import datetime

User =get_user_model()
"""
    retrieves the user model for the project using the get_user_model 
    function and assigns it to the User variable. This is a common practice
    in Django to ensure that your code remains 
    compatible with custom user models if you ever decide to use one. 
"""

# Create your models here.
#model for the a new user
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_user = models.IntegerField()
    bio = models.TextField(blank=True)
    profileimg = models.ImageField(upload_to='profile_images', default='profile.png')
    location = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.user.username
    
#model for posts   
class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.CharField(max_length=100)
    image = models.ImageField(upload_to='post_images')
    caption = models.TextField()
    created_at = models.DateTimeField(default=datetime.now)
    no_of_likes = models.IntegerField(default=0)

    def __str__(self):
        return self.user
    
#model for likes
class LikePost(models.Model):
    post_id = models.CharField(max_length=500)
    username = models.CharField(max_length=100)

    def __str__(self):
        return self.username
    


#model for followers/not priority
class FollowersCount(models.Model):
    follower = models.CharField(max_length=100)
    user = models.CharField(max_length=100)

    def __str__(self):
        return self.user
