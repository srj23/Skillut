from django.shortcuts import render
from django.http import JsonResponse
from .models import Skill
from users.models import CustomUser

def skill_list(request):
    skills = Skill.objects.all().values('name', 'description')
    return JsonResponse(list(skills), safe=False)
