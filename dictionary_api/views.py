from django.shortcuts import render
from rest_framework import generics
from dictionary.models import Term, EnglishTerm
from .serializers import TermSerializer, TranslationSerializer


# Create your views here.

class TermList(generics.ListCreateAPIView):
    queryset = Term.objects.all()
    serializer_class = TermSerializer    

class TermDetail(generics.RetrieveDestroyAPIView):
    queryset = Term.objects.all()
    serializer_class = TermSerializer

# Gets all translated terms for a given source term
class Translation(generics.RetrieveDestroyAPIView):
    queryset = EnglishTerm.translationObjects.all()
    serializer_class = TranslationSerializer




