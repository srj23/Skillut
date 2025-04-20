from django.db import models
from users.models import CustomUser

class Skill(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    is_available_to_teach = models.BooleanField(default=True)
    is_available_to_learn = models.BooleanField(default=True)
