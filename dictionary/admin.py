from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Term)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id', 'term', 'published')
    prepopulated_fields = {'slug': ('term',),}

@admin.register(models.EnglishTerm)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('english','korean', 'abbreviation', 'description') 


admin.site.register(models.Category)
