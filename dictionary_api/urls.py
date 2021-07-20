from django.urls import path
from .views import CategoryList, TermList, TermDetail, Translation

app_name = 'dictionary_api'

urlpatterns = [
    path('<int:pk>/', TermDetail.as_view(), name='detailcreate'),
    path('', TermList.as_view(), name='listcreate'),
    path('translation/<int:pk>/', Translation.as_view(), name='termcreate'), 
    path('categories/', CategoryList.as_view(), name="categorycreate" )
]
