from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields.related import ManyToManyField
from django.utils import timezone


# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Term(models.Model):

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.term

    term = models.CharField(max_length=30, unique=True)
    category = models.ManyToManyField(Category)
    published = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(max_length=30, blank=True)
    objects = models.Manager()


class EnglishTerm(models.Model):
    english = models.CharField(max_length=30, default='', blank=True)
    abbreviation = models.CharField(max_length=30, default='Not available', blank=True)
    korean = models.ForeignKey(
        Term, related_name="translations",  on_delete=models.CASCADE)
    description = models.TextField(max_length=2000, default='', blank=True)

    def __str__(self):
        return self.english

    class TranslationObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().select_related('korean')

    translationObjects = TranslationObjects()

 
