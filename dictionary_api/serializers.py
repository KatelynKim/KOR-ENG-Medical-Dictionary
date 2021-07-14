from rest_framework import serializers
from dictionary.models import Term, EnglishTerm
import nltk
import urllib
import bs4 as bs
import re
import requests
from urllib.error import HTTPError


class TranslationSerializer(serializers.ModelSerializer):

    original_term = serializers.SerializerMethodField('get_original_term')
    information = serializers.SerializerMethodField('scrape_information')

    class Meta:
        model = EnglishTerm
        fields = ('id', 'english', 'abbreviation',
                  'korean', 'original_term', 'information')

    def get_original_term(self, obj):
        return obj.korean.term

    def scrape_information(self, obj):

        input_word = obj.english.replace(' ', '_')

        try:
            source = urllib.request.urlopen(
                'https://en.wikipedia.org/wiki/'+input_word)

        except HTTPError as http_error:
            print(http_error)
        else:
            soup = bs.BeautifulSoup(source, 'lxml')
            text = ''

            for paragraph in soup.find_all('p', limit=5):
                text += paragraph.text

            return text


class TermSerializer(serializers.ModelSerializer):
    translations = TranslationSerializer(read_only=True, many=True)

    class Meta:
        model = Term
        fields = ('id', 'term', 'translations')
