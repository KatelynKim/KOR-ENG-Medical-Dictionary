from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('dictionary.urls', namespace='dictionary')),
    path('api/', include('dictionary_api.urls', namespace='dictionary_api'))
]
